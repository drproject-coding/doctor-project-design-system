import React, { useState } from "react";
import { ChartCard } from "../../../../components/Chart/ChartCard";

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

interface PaymentCard {
  id: string;
  name: string;
  last4: string;
  purchases: number;
  refunds: string;
  total: string;
}

const CARDS: PaymentCard[] = [
  {
    id: "1",
    name: "Visa",
    last4: "9078",
    purchases: 75,
    refunds: "-$1,592.64",
    total: "$26,440.52",
  },
  {
    id: "2",
    name: "Visa",
    last4: "5252",
    purchases: 48,
    refunds: "-$891.00",
    total: "$7,831.14",
  },
  {
    id: "3",
    name: "Visa",
    last4: "0094",
    purchases: 12,
    refunds: "-$199.00",
    total: "$1,892.45",
  },
  {
    id: "4",
    name: "Visa",
    last4: "3317",
    purchases: 8,
    refunds: "$0.00",
    total: "$843.00",
  },
];

/* -------------------------------------------------------------------------- */
/* Card row                                                                    */
/* -------------------------------------------------------------------------- */

interface CardRowProps {
  card: PaymentCard;
}

const CardRow: React.FC<CardRowProps> = ({ card }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "var(--drp-border-thin)",
        borderRadius: "var(--drp-radius)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--drp-space-4)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "var(--drp-space-4)",
        }}
      >
        {/* Left: card icon + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--drp-space-3)",
            flex: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              width: 42,
              height: 28,
              borderRadius: 4,
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            >
              VISA
            </span>
          </div>
          <div>
            <p
              className="drp-text drp-text--sm drp-text--bold"
              style={{ marginBottom: 2 }}
            >
              {card.name} •••• {card.last4}
            </p>
            <p className="drp-text drp-text--xs drp-text--muted">
              {card.purchases} purchases · {card.refunds} refunds
            </p>
          </div>
        </div>

        {/* Right: total + chevron */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--drp-space-3)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#7c3aed",
            }}
          >
            {card.total}
          </span>
          <span
            style={{
              fontSize: 12,
              color: "#9ca3af",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div
          style={{
            borderTop: "var(--drp-border-thin)",
            padding: "var(--drp-space-4)",
            background: "rgba(0,0,0,0.02)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--drp-space-4)",
            }}
          >
            <div>
              <p
                className="drp-text drp-text--xs drp-text--muted"
                style={{ marginBottom: 4 }}
              >
                Total Purchases
              </p>
              <p className="drp-text drp-text--sm drp-text--bold">
                {card.purchases}
              </p>
            </div>
            <div>
              <p
                className="drp-text drp-text--xs drp-text--muted"
                style={{ marginBottom: 4 }}
              >
                Refunds
              </p>
              <p
                className="drp-text drp-text--sm drp-text--bold"
                style={{ color: "#e11d48" }}
              >
                {card.refunds}
              </p>
            </div>
            <div>
              <p
                className="drp-text drp-text--xs drp-text--muted"
                style={{ marginBottom: 4 }}
              >
                Net Spent
              </p>
              <p
                className="drp-text drp-text--sm drp-text--bold"
                style={{ color: "#7c3aed" }}
              >
                {card.total}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Payment Methods Tab                                                         */
/* -------------------------------------------------------------------------- */

export const PaymentMethods: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    <ChartCard title="Spending by Payment Method">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--drp-space-3)",
          marginTop: "var(--drp-space-2)",
        }}
      >
        {CARDS.map((card) => (
          <CardRow key={card.id} card={card} />
        ))}
      </div>
    </ChartCard>

    {/* Summary stats */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--drp-space-4)",
      }}
    >
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Total Cards
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>4</p>
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Total Purchases
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>143</p>
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Primary Card
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#7c3aed" }}>
          Visa ••••9078
        </p>
      </div>
    </div>
  </div>
);
