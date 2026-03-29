"use client";

import dynamic from "next/dynamic";

const AmbientCursorGlow = dynamic(
  () => import("@/components/landing/ambient-cursor-glow").then((module) => module.AmbientCursorGlow),
  { ssr: false },
);

const LazyContactDock = dynamic(
  () => import("@/components/landing/contact-dock").then((module) => module.ContactDock),
  { ssr: false },
);

export function LayoutChrome() {
  return (
    <>
      <AmbientCursorGlow />
      <LazyContactDock />
    </>
  );
}
