import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "WHYN Web Development Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "#fcfcfc",
            letterSpacing: "-0.04em",
            marginBottom: 16,
          }}
        >
          WHYN
        </div>

        <div
          style={{
            fontSize: 28,
            color: "rgba(252,252,252,0.6)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          AI-Powered Websites That Drive Business Growth
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#d4af37",
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          whyn.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
