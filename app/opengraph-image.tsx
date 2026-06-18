import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BGK Financial Planning - Regulated Financial Planning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #003366 0%, #00509E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#E9C400",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24
          }}
        >
          Regulated Financial Planning
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 800
          }}
        >
          BGK Financial Planning
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#bfdbfe",
            maxWidth: 700,
            lineHeight: 1.5
          }}
        >
          Investment · Retirement · Protection · Mortgage Referrals
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 16,
            color: "rgba(255,255,255,0.5)"
          }}
        >
          Appointed Representative of 2plan wealth management Ltd
        </div>
      </div>
    ),
    size
  );
}
