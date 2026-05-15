import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#050507",
          backgroundImage:
            "radial-gradient(circle at 72% 34%, rgba(185,223,255,0.16), transparent 320px), radial-gradient(circle at 20% 78%, rgba(185,179,255,0.1), transparent 280px)",
          color: "#f4f0e8",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(244,240,232,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,0.18) 1px, transparent 1px)",
            backgroundSize: "58px 58px"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(244,240,232,0.9) 0 1px, transparent 1px)",
            backgroundSize: "5px 5px"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 76,
            top: 62,
            right: 76,
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,240,232,0.18)",
            borderBottom: "1px solid rgba(244,240,232,0.18)",
            padding: "18px 0",
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
            fontSize: 22,
            letterSpacing: 0,
            textTransform: "uppercase",
            color: "rgba(185,223,255,0.72)"
          }}
        >
          <span>0R-PUBLIC-01</span>
          <span>Signal open</span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 76,
            right: 76,
            bottom: 76,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.9,
              letterSpacing: 0
            }}
          >
            0rigin
          </div>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              alignItems: "center",
              gap: 26,
              fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
              fontSize: 34,
              lineHeight: 1.25,
              color: "rgba(244,240,232,0.82)"
            }}
          >
            <span
              style={{
                width: 92,
                height: 1,
                background: "rgba(185,223,255,0.42)"
              }}
            />
            <span>The archive is still receiving.</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
