import { ArrowDown } from "lucide-react";
import festivalsOfAlohaImg from "../assets/festivals-of-aloha.png";

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ResultsInsightsStrip({
  description,
  avgPriceUsd,
}: {
  description?: string;
  avgPriceUsd?: number;
}) {
  const avg = typeof avgPriceUsd === "number" && isFinite(avgPriceUsd) ? avgPriceUsd : null;

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "stretch",
        justifyContent: "space-between",
        width: "100%",
      }}
      data-name="Results insights strip"
    >
      {/* Card 1: About your results */}
      <div
        style={{
          backgroundColor: "#b5effd",
          height: "167px",
          minWidth: "0px",
          flex: "1 1 0",
          borderRadius: "24px",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "'CentraNo2', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            color: "#191e3b",
            margin: 0,
          }}
        >
          About your results
        </p>
        <div style={{ marginTop: "12px" }}>
          {description ? (
            <p
              style={{
                fontFamily: "'CentraNo2', sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#191e3b",
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical" as any,
                WebkitLineClamp: 4 as any,
                maxHeight: "80px",
              }}
            >
              {description}
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ height: "14px", width: "92%", backgroundColor: "rgba(25,30,59,0.12)", borderRadius: "4px" }} />
              <div style={{ height: "14px", width: "86%", backgroundColor: "rgba(25,30,59,0.12)", borderRadius: "4px" }} />
              <div style={{ height: "14px", width: "74%", backgroundColor: "rgba(25,30,59,0.12)", borderRadius: "4px" }} />
            </div>
          )}
        </div>
      </div>

      {/* Card 2: Avg price */}
      <div
        style={{
          backgroundColor: "#d1fae1",
          height: "167px",
          width: "196px",
          flexShrink: 0,
          borderRadius: "24px",
          padding: "24px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Green badge with arrow */}
        <div
          style={{
            backgroundColor: "#21e56f",
            padding: "6px",
            borderRadius: "24px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowDown size={16} strokeWidth={2.5} color="#191e3b" />
        </div>

        {/* Price - positioned to the right of badge */}
        <span
          style={{
            fontFamily: "'CentraNo2', sans-serif",
            fontWeight: 500,
            color: "#191e3b",
            marginLeft: "8px",
            letterSpacing: "-0.8px",
          }}
        >
          <span style={{ fontSize: "32px", lineHeight: 1 }}>{avg ? formatUsd(avg) : "$—"}</span>
          <span style={{ fontSize: "14px", lineHeight: 1, letterSpacing: "normal" }}> avg.</span>
        </span>

        {/* Bottom text */}
        <p
          style={{
            fontFamily: "'CentraNo2', sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#191e3b",
            margin: 0,
            position: "absolute",
            bottom: "24px",
            left: "24px",
            width: "145px",
          }}
        >
          Prices are lower than usual for your dates.
        </p>
      </div>

      {/* Card 3: Festivals */}
      <div
        style={{
          backgroundColor: "#f6f3ee",
          height: "167px",
          width: "196px",
          flexShrink: 0,
          borderRadius: "24px",
          padding: "24px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontFamily: "'CentraNo2', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            color: "#191e3b",
            margin: 0,
          }}
        >
          Festivals of Aloha
        </p>
        <p
          style={{
            fontFamily: "'CentraNo2', sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#191e3b",
            margin: 0,
            marginTop: "12px",
            width: "140px",
          }}
        >
          September brings local festivals across Maui.
        </p>

        {/* Decorative image */}
        <img
          alt=""
          src={festivalsOfAlohaImg}
          style={{
            position: "absolute",
            right: "-54px",
            bottom: "-53px",
            width: "204px",
            height: "136px",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
