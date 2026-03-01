import type { Preview } from "@storybook/react";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    darkMode: {
      classTarget: "body",
      darkClass: "dark-mode",
      lightClass: "",
      stylePreview: true,
    },
    backgrounds: { disable: true },
  },
};

export default preview;
