# Accordion

## Interface and Type

```javascript
type TActiveAccordionAppears = "ONE" | "MANY";

interface IAccordionPanes {
  title: string | JSX.Element;
  content: string | JSX.Element;
}

interface IAccordionStyle {
  borderColor?: string;
  titlePadding?: string;
  contentPadding?: string;
  borderRadius?: string;
}

interface IAccordionData {
  panes: IAccordionPanes[];
  activeIndexes: number[];
}
```

## Props

| Props                  | Type                           | Description                                                                                                                                       | Required |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| panes                  | IAccordionPanes[]              | The item of the accordion; consist of title and content.                                                                                          | Yes      |
| activeAccordionAppears | TActiveAccordionAppears        | Active Shown Accordion, if choose "ONE" means only one accordion can be active, else more than one accordion can be active                        | Yes      |
| onClickedAccordion     | (data: IAccordionData) => void | A callback return data                                                                                                                            | No       |
| style                  | IAccordionStyle                | Additional style for the accordion. If the additional style can not complete your requirement, please using the class name and do manual styling. | No       |
| className              | string                         | Additional class name                                                                                                                             | No       |
