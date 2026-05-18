"use client";

import { useEffect, useRef, useState } from "react";
import { AD_SLOTS } from "@/lib/adSlots";

type Variant = "banner" | "sidebar" | "quiz";

type AdBannerProps = {
  slotId: string;
  variant: Variant;
  className?: string;
};

const minHeights: Record<Variant, string> = {
  banner: "250px",
  sidebar: "600px",
  quiz: "150px",
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({ slotId, variant, className = "" }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [hidden, setHidden] = useState(false);
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDev) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}

    const ins = insRef.current;
    if (!ins) return;
    const observer = new MutationObserver(() => {
      if ((ins as HTMLElement).dataset.adStatus === "unfilled") {
        setHidden(true);
      }
    });
    observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, [isDev]);

  if (isDev) {
    return (
      <div
        style={{ minHeight: minHeights[variant], maxWidth: "100%" }}
        className={`bg-gray-200 flex items-center justify-center rounded text-gray-500 text-xs ${className}`}
      >
        slot: {slotId} / {variant}
      </div>
    );
  }

  const isInArticle = slotId === AD_SLOTS.quiz_between;

  return (
    <div
      style={
        hidden
          ? { height: 0, overflow: "hidden" }
          : { minHeight: minHeights[variant], maxWidth: "100%" }
      }
      className={className}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", textAlign: isInArticle ? "center" : undefined }}
        data-ad-client="ca-pub-8518556382646891"
        data-ad-slot={slotId}
        data-ad-format={isInArticle ? "fluid" : "auto"}
        {...(isInArticle
          ? { "data-ad-layout": "in-article" }
          : { "data-full-width-responsive": "true" })}
      />
    </div>
  );
}
