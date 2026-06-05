import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a0a2e, #0a0a1a)",
          borderRadius: 7,
          border: "1px solid rgba(125,44,200,0.5)",
          boxShadow: "0 0 8px rgba(125,44,200,0.4)",
          fontSize: 20,
        }}
      >
        🤖
      </div>
    ),
    { ...size }
  );
}
