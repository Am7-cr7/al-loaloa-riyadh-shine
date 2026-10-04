import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isVercel = !!process.env.VERCEL;
const isCloudflare =
  !!process.env.WORKERS_CI ||
  !!process.env.CF_PAGES ||
  process.env.DEPLOY_TARGET === "cloudflare";

const nitroConfig = isVercel
  ? { preset: "vercel" }
  : isCloudflare
    ? { preset: "cloudflare-module", output: { dir: "dist" } }
    : {
        preset: "node-server",
        output: { dir: ".output", serverDir: "server", publicDir: "client" },
      };

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({ server: { entry: "server" } }),
    ...(command === "build" ? [nitro(nitroConfig)] : []),
    viteReact(),
  ],
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
    dedupe: ["react", "react-dom", "@tanstack/react-start", "@tanstack/react-router"],
  },
  server: { host: "0.0.0.0", port: 8080, strictPort: true },
}));
