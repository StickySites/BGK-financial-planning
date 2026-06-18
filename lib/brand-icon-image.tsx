import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export async function getBrandLogoDataUrl() {
  const logoData = await readFile(join(process.cwd(), "public/media/bgk-logo-nobg.png"));
  return `data:image/png;base64,${logoData.toString("base64")}`;
}

export function BrandIconMarkup({ logoSrc }: { logoSrc: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        borderRadius: "50%"
      }}
    >
      <img
        src={logoSrc}
        alt=""
        style={{
          width: "94%",
          height: "94%",
          objectFit: "contain"
        }}
      />
    </div>
  );
}

export async function createBrandIconImageResponse(size: { width: number; height: number }) {
  const logoSrc = await getBrandLogoDataUrl();

  return new ImageResponse(<BrandIconMarkup logoSrc={logoSrc} />, {
    width: size.width,
    height: size.height
  });
}
