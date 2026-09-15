"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

type Props = {
  className?: string;
};

const SCRIPT_ID = "Bilet.do";
const CONTAINER_ID = "biletdo-widget";

function widgetSrc() {
  return `https://bilet.do/agency-widget/widget.js?agency=${site.biletdo.agency}&color=%23${site.biletdo.color}&title=${site.biletdo.titleEncoded}&bRounding=true`;
}

function dedupeWidget(container: HTMLElement) {
  const iframes = container.querySelectorAll("iframe");
  iframes.forEach((node, index) => {
    if (index > 0) node.remove();
  });
  const loaders = container.querySelectorAll("#widget_loader");
  loaders.forEach((node, index) => {
    if (index > 0) node.remove();
  });
}

export function TicketWidget({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    // Strict Mode в dev вызывает effect → cleanup → effect.
    // Откладываем init, чтобы первый (отменённый) запуск не успел вставить скрипт.
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      if (container.querySelector("iframe")) {
        dedupeWidget(container);
        return;
      }

      container.innerHTML = "";
      document.getElementById(SCRIPT_ID)?.remove();

      const script = document.createElement("script");
      script.async = true;
      script.charset = "UTF-8";
      script.id = SCRIPT_ID;
      script.src = widgetSrc();
      script.onload = () => {
        if (cancelled) return;
        dedupeWidget(container);
      };
      document.body.appendChild(script);
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      document.getElementById(SCRIPT_ID)?.remove();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        id={CONTAINER_ID}
        className="min-h-[170px] w-full overflow-hidden rounded-2xl bg-surface"
      />
    </div>
  );
}
