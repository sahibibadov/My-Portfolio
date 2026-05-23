import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Sahib Ibadov — iOS & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
            background:
              "radial-gradient(circle at 20% 0%, #0ea5e933 0%, transparent 55%), radial-gradient(circle at 90% 100%, #6366f133 0%, transparent 50%), #0a0a0a",
            color: "#fafafa",
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#0ea5e9",
                boxShadow: "0 0 24px 4px #0ea5e9",
              }}
            />
            <span style={{ fontSize: 28, letterSpacing: 2, color: "#a3a3a3", textTransform: "uppercase" }}>
              sahibibadov.com
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontSize: 110, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
              Sahib Ibadov
            </span>
            <span style={{ fontSize: 46, fontWeight: 600, color: "#d4d4d4" }}>
              iOS & Frontend Developer
            </span>
            <span style={{ fontSize: 30, color: "#0ea5e9", marginTop: 8 }}>
              Swift · SwiftUI · UIKit · Next.js · React
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "#737373",
              fontSize: 26,
            }}
          >
            <span>Portfolio · 2026</span>
            <span>Azerbaijan</span>
          </div>
        </div>
      ),
      { ...size },
    );
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
            color: "#fafafa",
            fontSize: 80,
            fontWeight: 700,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Sahib Ibadov
        </div>
      ),
      { ...size },
    );
  }
}
