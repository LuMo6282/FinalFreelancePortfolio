"use client";

import { useEffect, useRef, useState } from "react";

const IFRAME_BASE_WIDTH = 1440;
const IFRAME_BASE_HEIGHT = 900;

type Props = {
  src: string;
  title: string;
  baseWidth?: number;
  baseHeight?: number;
};

export default function ScaledIframe({
  src,
  title,
  baseWidth = IFRAME_BASE_WIDTH,
  baseHeight = IFRAME_BASE_HEIGHT,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setScale(w / baseWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [baseWidth]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          width: baseWidth,
          height: baseHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="pointer-events-none absolute left-0 top-0 block border-0"
      />
    </div>
  );
}
