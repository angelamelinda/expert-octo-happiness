# Tab

## Interface and Type

```javascript
interface ITabStyle {
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

interface ITabPanes {
  menuItem: string | JSX.Element;
  render: string | JSX.Element;
}

interface ITabData {
  activeIndex: number;
  panes: ITabPanes[];
}
```

## Props

| Props       | Type                                                                | Description                                                                                                                                 | Required |
| ----------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| panes       | ITabPanes[]                                                         | The item of the tab; consist of menuItem and render.                                                                                        | Yes      |
| onTabChange | ( e : MouseEvent < HTMLAnchorElement >, data : ITabData ) => void ; | A callback return event handler and data                                                                                                    | No       |
| style       | ITabStyle                                                           | Additional style for the tab. If the additional style can not complete your requirement, please using the class name and do manual styling. | No       |
| className   | string                                                              | Additional class name                                                                                                                       | No       |
