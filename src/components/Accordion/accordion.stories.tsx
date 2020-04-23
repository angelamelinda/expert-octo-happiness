import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, radios, object } from "@storybook/addon-knobs";

import * as accordionNotes from "./accordion.md";
import Accordion, { IAccordionPanes, IAccordionStyle } from "./Accordion";
import { COLOR } from "../../constants";

export default {
  title: "Accordion",
  component: Accordion,
  decorators: [withKnobs],
  parameters: { notes: accordionNotes },
};

const STYLE: IAccordionStyle = {
  borderColor: COLOR.GREY,
  titlePadding: "15px 20px",
  contentPadding: "20px",
  borderRadius: "2px",
};

const DEFAULT_PANES: IAccordionPanes[] = [
  {
    title: "Accordion Title 1",
    content: "Accordion Content 1",
  },
  {
    title: "Accordion Title 2",
    content: "Accordion Content 2",
  },
];

export const oneActiveAccordion = () => {
  const activeAccordionAppearsOptionCheck = radios(
    "activeAccordionAppears",
    { ONE: "ONE" },
    "ONE",
    "Props Accordion"
  );

  const panes = object("panes", DEFAULT_PANES, "Props Accordion");

  const style = object("style", STYLE, "Props Accordion");

  const actionsData = {
    onClickedAccordion: action("onClickedAccordion"),
  };

  return (
    <Accordion
      panes={panes}
      activeAccordionAppears={activeAccordionAppearsOptionCheck}
      {...actionsData}
      style={style}
    />
  );
};

export const manyActiveAccordion = () => {
  const activeAccordionAppearsOptionCheck = radios(
    "activeAccordionAppears",
    { MANY: "MANY" },
    "MANY",
    "Props Accordion"
  );

  const panes = object("panes", DEFAULT_PANES, "Props Accordion");

  const style = object("style", STYLE, "Props Accordion");

  const actionsData = {
    onClickedAccordion: action("onClickedAccordion"),
  };

  return (
    <Accordion
      panes={panes}
      activeAccordionAppears={activeAccordionAppearsOptionCheck}
      {...actionsData}
      style={style}
    />
  );
};
