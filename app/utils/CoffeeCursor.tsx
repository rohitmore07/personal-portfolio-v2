"use client";

import { useEffect } from "react";

const SIZE = 40; // px, matches the width/height of /public/coffee-cursor.svg

/**
 * Draws the coffee cup icon as the mouse pointer.
 * The element is created by hand and kept as the last child of <body>
 * so it always paints above Blobity's canvas.
 */
export default function CoffeeCursor() {
  useEffect(() => {
    // Only for devices with a real mouse; touch screens keep their default behaviour.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = document.createElement("img");
    el.src = "/coffee-cursor.svg";
    el.alt = "";
    el.setAttribute("aria-hidden", "true");
    el.draggable = false;
    el.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: ${SIZE}px;
      height: ${SIZE}px;
      pointer-events: none;
      z-index: 2147483647;
      opacity: 0;
      transition: opacity 0.15s ease;
      will-change: transform;
    `;
    document.body.appendChild(el);

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - SIZE / 2}px, ${
        e.clientY - SIZE / 2
      }px, 0)`;
      el.style.opacity = "1";
      // Blobity may append its canvas after us; stay on top.
      if (document.body.lastElementChild !== el) document.body.appendChild(el);
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      el.remove();
    };
  }, []);

  return null;
}
