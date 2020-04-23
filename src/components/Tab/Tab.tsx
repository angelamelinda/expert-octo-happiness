import React, { MouseEvent, FC, useState } from "react";
import {
  TabMenus,
  TabContents,
  Tabs,
  TabMenuItem,
  TabContent,
} from "./tab.styled";

export interface ITabStyle {
  borderColor?: string;
  backgroundColor?: string;
  tabColor?: string;
  contentColor?: string;
  tabPadding?: string;
  contentPadding?: string;
  activeBorderColor?: string;
  activeTabColor?: string;
  tabBorderRadius?: string;
  contentBorderRadius?: string;
}

export interface ITabPanes {
  menuItem: string | JSX.Element;
  render: string | JSX.Element;
}

interface ITabData {
  activeIndex: number;
  panes: ITabPanes[];
}

export interface ITabProps {
  onTabChange?: (e: MouseEvent<HTMLAnchorElement>, data: ITabData) => void;
  className?: string;
  panes: ITabPanes[];
  style?: ITabStyle;
}

const Tab: FC<ITabProps> = ({ className, panes, onTabChange, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeTab = (e: MouseEvent<HTMLAnchorElement>, id: number) => {
    setActiveIndex(id);

    if (onTabChange) {
      const data = {
        activeIndex,
        panes,
      };

      onTabChange(e, data);
    }
  };

  const renderTabs = (panes: ITabPanes[]) => {
    return panes
      .filter((_, id: number) => id === activeIndex)
      .map((activePane: ITabPanes, id: number) => (
        <TabContent key={id} className="active">
          {activePane.render}
        </TabContent>
      ));
  };

  return (
    <Tabs data-testid="tabs" className={`tabs ${className ? className : ""}`}>
      <TabMenus className="top tab-menus">
        {panes.map((item: ITabPanes, id: number) => (
          <TabMenuItem
            key={id}
            className={`${activeIndex === id ? "active" : ""}`}
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              handleChangeTab(e, id)
            }
            styled={style}
          >
            {item.menuItem}
          </TabMenuItem>
        ))}
      </TabMenus>
      <TabContents className="bottom tab-contents" styled={style}>
        {renderTabs(panes)}
      </TabContents>
    </Tabs>
  );
};

export default Tab;
