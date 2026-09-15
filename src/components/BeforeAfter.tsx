import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * Before/After comparison slider.
 * The "after" image sits on top and is clipped with inset() based on the
 * handle position (percentage). Works with mouse, touch and keyboard.
 */
export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, raw)));
  }, []);

  return (
    <div
      ref={ref}
      dir="ltr"
      className="relative aspect-[4/3] w-full touch-none overflow-hidden rounded-2xl border border-gold/25 select-none"
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => move(e.touches[0]!.clientX)}
      onTouchMove={(e) => move(e.touches[0]!.clientX)}
    >
      <img
        src={before}
        alt={`${alt} — قبل`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <img
        src={after}
        alt={`${alt} — بعد`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      />

      <span className="absolute top-3 left-3 rounded-md bg-background/80 px-3 py-1 text-xs font-bold text-foreground">
        قبل
      </span>
      <span className="absolute top-3 right-3 rounded-md bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">
        بعد
      </span>

      {/* Divider + draggable handle */}
      <div className="absolute inset-y-0 w-0.5 bg-gold" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="مقارنة قبل وبعد"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-gold)]"
        >
          <MoveHorizontal className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
