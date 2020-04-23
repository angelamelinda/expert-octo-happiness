import styled from "styled-components";
import { COLOR, FONT_WEIGHT } from "../../constants";
import { ITabStyle } from "./Tab";

const Tabs = styled.div``;

const TabMenus = styled.div``;

const TabMenuItem = styled.a<{ styled?: ITabStyle }>`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  color: ${(props) =>
    props.styled && props.styled.tabColor ? props.styled.tabColor : "inherit"};
  padding: ${(props) =>
    props.styled && props.styled.tabPadding ? props.styled.tabPadding : "15px"};
  background: ${(props) =>
    props.styled && props.styled.backgroundColor
      ? props.styled.backgroundColor
      : COLOR.WHITE};
  border: 1px solid
    ${(props) => (props.styled && props.styled.borderColor) || COLOR.GREY};
  margin-bottom: -1px;
  border-radius: ${(props) =>
    props.styled && props.styled.tabBorderRadius
      ? props.styled.tabBorderRadius
      : undefined};
  transition: all 0.3s ease;

  &:not(:first-of-type) {
    margin-left: 3px;
  }

  &.active {
    font-weight: ${FONT_WEIGHT.BOLD};
    border-bottom: 1px solid
      ${(props) =>
        props.styled && props.styled.backgroundColor
          ? props.styled.backgroundColor
          : COLOR.WHITE};
    background-color: ${(props) =>
      props.styled ? props.styled.backgroundColor : undefined};
    border-color: ${(props) =>
      props.styled && props.styled.activeBorderColor
        ? props.styled.activeBorderColor
        : undefined};
    color: ${(props) =>
      props.styled && props.styled.activeTabColor
        ? props.styled.activeTabColor
        : undefined};
  }

  @media (max-width: 767px) {
    display: block;
    margin-left: 0;
  }
`;

const TabContents = styled.div<{ styled?: ITabStyle }>`
  padding: ${(props) =>
    props.styled && props.styled.contentPadding
      ? props.styled.contentPadding
      : "15px"};
  border: 1px solid
    ${(props) =>
      props.styled && props.styled.borderColor
        ? props.styled.borderColor
        : COLOR.GREY};
  background: ${(props) =>
    props.styled && props.styled.backgroundColor
      ? props.styled.backgroundColor
      : COLOR.WHITE};
  color: ${(props) =>
    props.styled && props.styled.contentColor
      ? props.styled.contentColor
      : "inherit"};
  border-radius: ${(props) =>
    props.styled && props.styled.contentBorderRadius
      ? props.styled.contentBorderRadius
      : undefined};
`;

const TabContent = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;
export { Tabs, TabMenus, TabContents, TabMenuItem, TabContent };
