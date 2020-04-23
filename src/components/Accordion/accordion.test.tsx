import React from "react";
import { render } from "@testing-library/react";

import Accordion, { IAccordion } from "./Accordion";

describe("Accordion Component", () => {
  let props: IAccordion;

  beforeEach(() => {
    props = {
      panes: [
        {
          title: "Accordion 1",
          content: "Accordion content 1",
        },
      ],
      activeAccordionAppears: "ONE",
    };
  });

  const renderComponent = () => render(<Accordion {...props} />);

  describe("Snapshots", () => {
    it("should have primary className with default props", () => {
      const { getByTestId } = renderComponent();

      const Accordion = getByTestId("accordions");

      expect(Accordion).toHaveClass("accordions");
    });

    it("should have secondary className with className set as accordions-secondary", () => {
      props.className = "accordions-secondary";
      const { getByTestId } = renderComponent();

      const Accordion = getByTestId("accordions");

      expect(Accordion).toHaveClass("accordions-secondary");
    });
  });
});
