import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import Tab, { ITabPanes, ITabStyle } from "./Tab";
import tabNotes from "./tab.md";
import { COLOR } from "../../constants";

export default {
  title: "Tab",
  parameters: {
    notes: tabNotes,
    jest: ["tab.test.tsx"],
  },
  decorators: [withKnobs],
};

const DEFAULT_PANES: ITabPanes[] = [
  {
    menuItem: "Tab 1",
    render: <p>Tab 1 Content</p>,
  },
  {
    menuItem: "Tab 2",
    render: <p>Tab 2 Content</p>,
  },
  {
    menuItem: "Tab 3",
    render: <p>Tab 3 Content</p>,
  },
];

const STYLE: ITabStyle = {
  borderColor: COLOR.GREY,
  backgroundColor: COLOR.WHITE,
  tabColor: COLOR.BLACK,
  contentColor: COLOR.BLACK,
  tabPadding: "15px",
  contentPadding: "20px",
  activeBorderColor: COLOR.GREY,
  activeTabColor: COLOR.BLACK,
  tabBorderRadius: "4px 4px 0 0",
  contentBorderRadius: "0 0 4px 4px",
};

export const tab = () => {
  const panes = object("panes", DEFAULT_PANES, "Props Tab");

  const style = object("style", STYLE, "Props Tab");

  const actionsData = {
    onTabChange: action("onTabChange"),
  };

  return <Tab panes={panes} {...actionsData} style={style} />;
};

export const tabMobileVersion = () => {
  const panes = object("panes", DEFAULT_PANES, "Props Tab");

  const style = object("style", STYLE, "Props Tab");

  const actionsData = {
    onTabChange: action("onTabChange"),
  };

  return <Tab panes={panes} {...actionsData} style={style} />;
};

tabMobileVersion.story = {
  parameters: {
    viewport: { defaultViewport: "iphone6" },
  },
};
