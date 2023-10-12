import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import '@ignite-ui/react/dist/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
