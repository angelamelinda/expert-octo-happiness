import React from "react";
import { render } from "@testing-library/react";

import Tab, { ITabProps } from "./Tab";

describe("Tab Component", () => {
  let props: ITabProps;

  beforeEach(() => {
    props = {
      panes: [
        {
          menuItem: "Tab 1",
          render: "Tab content 1",
        },
      ],
    };
  });

  const renderComponent = () => render(<Tab {...props} />);

  describe("Snapshots", () => {
    it("should have primary className with default props", () => {
      const { getByTestId } = renderComponent();

      const tab = getByTestId("tabs");

      expect(tab).toHaveClass("tabs");
    });

    it("should have secondary className with className set as tabs-secondary", () => {
      props.className = "tabs-secondary";
      const { getByTestId } = renderComponent();

      const tab = getByTestId("tabs");

      expect(tab).toHaveClass("tabs-secondary");
    });
  });
});
