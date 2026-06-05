import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a0a2e, #0a0a1a)",
          borderRadius: 36,
          border: "2px solid rgba(125,44,200,0.5)",
          fontSize: 110,
        }}
      >
        🤖
      </div>
    ),
    { ...size }
  );
}
