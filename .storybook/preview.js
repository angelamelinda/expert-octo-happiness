import { addParameters, addDecorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import results from "../.jest-test-results.json";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(
  withTests({
    results,
  })
);
