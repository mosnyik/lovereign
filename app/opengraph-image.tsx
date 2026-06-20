import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/siteConfig";

export const alt = `${siteConfig.brand} — Home Care & Behavioral Support`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "android-chrome-512x512.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #1a2f4d 0%, #24426a 55%, #3c5780 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 280,
            height: 280,
            borderRadius: 32,
            background: "#fbf8f4",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(11,20,34,0.35)",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={230} height={230} alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#dcc8ed",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            {siteConfig.brand}
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            Compassionate Home Care &amp; Behavioral Support
          </div>
          <div
            style={{
              display: "flex",
              color: "#c5d5ea",
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            Care that feels like family — for every family, in every county.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
