import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Composites/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    badge: (
      <>
        <span>⚕</span> Product Experience Management
      </>
    ),
    title: (
      <>
        Prescription For{" "}
        <span style={{ color: "var(--bru-purple)" }}>Product Chaos</span>
      </>
    ),
    subtitle:
      "Centralize, Standardize, Syndicate. The clinical approach to PXM that treats your disorganized product data.",
    actions: (
      <div style={{ display: "flex", gap: "16px" }}>
        <button className="bru-btn bru-btn--primary bru-btn--lg">
          Start Treatment
        </button>
        <button className="bru-btn bru-btn--outline bru-btn--lg">
          Learn More
        </button>
      </div>
    ),
    visual: (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--bru-font-primary)",
            fontSize: "8rem",
            fontWeight: 800,
            color: "var(--bru-purple)",
          }}
        >
          PXM
        </div>
        <div
          style={{
            fontFamily: "var(--bru-font-mono)",
            fontSize: "12px",
            color: "var(--bru-orange)",
            marginTop: "16px",
            letterSpacing: "0.1em",
          }}
        >
          PRODUCT EXPERIENCE MANAGEMENT
        </div>
      </div>
    ),
  },
};

export const SimpleHero: Story = {
  args: {
    title: (
      <>
        Build Better{" "}
        <span style={{ color: "var(--bru-purple)" }}>Products</span>
      </>
    ),
    subtitle: "A brutalist design system for modern web applications.",
    actions: (
      <button className="bru-btn bru-btn--primary bru-btn--lg">
        Get Started
      </button>
    ),
  },
};
