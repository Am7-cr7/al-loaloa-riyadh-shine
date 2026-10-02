/**
 * "مستشار العناية" — server function that turns a customer's car description
 * (and optionally a photo) into a package recommendation + care tips,
 * using the configured AI gateway (OpenAI Responses API).
 */

import { createServerFn } from "@tanstack/react-start";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText, Output, NoObjectGeneratedError } from "ai";
import { z } from "zod";
import { createGatewayRunIdFetch } from "./ai-gateway.server";
import { SERVICES } from "./content";

const PACKAGE_TITLES = SERVICES.map((s) => s.title);

const AdvisorInput = z.object({
  /** Free-text Arabic description of the car and its condition. */
  description: z.string().max(1500),
  /** Optional data URL (image/*) of the car photo uploaded by the customer. */
  imageDataUrl: z.string().max(6_000_000).nullable(),
});

export type AdvisorResult = {
  carSummary: string;
  recommendedPackage: string;
  reason: string;
  tips: string[];
  whatsappMessage: string;
};

const AdvisorSchema = z.object({
  carSummary: z.string().describe("وصف موجز للسيارة وحالتها بالعربية"),
  recommendedPackage: z
    .string()
    .describe(`اسم الباقة المقترحة، واحدة من: ${PACKAGE_TITLES.join(" | ")}`),
  reason: z.string().describe("سبب اختيار الباقة بجملتين بالعربية"),
  tips: z.array(z.string()).describe("من 3 إلى 5 نصائح عناية عملية بالعربية"),
  whatsappMessage: z.string().describe("رسالة واتساب جاهزة للإرسال بالعربية"),
});

export const recommendPackage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AdvisorInput.parse(input))
  .handler(async ({ data }): Promise<AdvisorResult> => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("خدمة الاقتراح غير متاحة حالياً.");

    if (!data.description.trim() && !data.imageDataUrl) {
      throw new Error("اكتب وصفاً لسيارتك أو ارفع صورة لها.");
    }

    const runIdFetch = createGatewayRunIdFetch();
    const gateway = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey: key, // satisfies the SDK; the gateway authenticates on the header below
      headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: runIdFetch.fetch,
    });

    const packagesBrief = SERVICES.map(
      (s) => `- ${s.title}: ${s.desc} (يشمل: ${s.features.join("، ")})`,
    ).join("\n");

    const textPrompt = [
      "أنت مستشار عناية بالسيارات في مغسلة «اللؤلؤة» المتنقلة بالرياض (غسيل وتلميع بالبخار).",
      "اقترح باقة واحدة فقط من الباقات التالية ثم نصائح عناية عملية. اكتب كل شيء بالعربية الفصحى المبسطة ولا تذكر أي أسعار.",
      "الباقات المتاحة:",
      packagesBrief,
      "",
      `وصف العميل: ${data.description.trim() || "(لم يكتب وصفاً — اعتمد على الصورة)"}`,
    ].join("\n");

    const result = streamText({
      model: gateway.responses("openai/gpt-6-astra"),
      output: Output.object({ schema: AdvisorSchema }),
      messages: [
        {
          role: "user",
          content: data.imageDataUrl
            ? [
                { type: "text" as const, text: textPrompt },
                { type: "image" as const, image: new URL(data.imageDataUrl) },
              ]
            : [{ type: "text" as const, text: textPrompt }],
        },
      ],
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    try {
      const output = await result.output;
      return {
        carSummary: output.carSummary,
        recommendedPackage: output.recommendedPackage,
        reason: output.reason,
        tips: output.tips.slice(0, 5),
        whatsappMessage: output.whatsappMessage,
      };
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        throw new Error("تعذّر إنشاء التوصية، حاول مرة أخرى.");
      }
      throw error;
    }
  });
