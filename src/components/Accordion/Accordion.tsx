import React, {
  FC,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
} from "react";
import {
  AccordionContentWrapper,
  AccordionTitle,
  AccordionContent,
  Accordions,
  Accordion as AccordionItem,
} from "./accordion.styled";

type TActiveAccordionAppears = "ONE" | "MANY";

type TAccordionStatus = "IS_OPENING" | "IS_OPENED" | "IS_CLOSING" | "IS_CLOSED";

export interface IAccordionPanes {
  title: string | JSX.Element;
  content: string | JSX.Element;
}

export interface IAccordionStyle {
  borderColor?: string;
  titlePadding?: string;
  contentPadding?: string;
  borderRadius?: string;
}

interface IAccordionData {
  panes: IAccordionPanes[];
  activeIndexes: number[];
}

export interface IAccordion {
  panes: IAccordionPanes[];
  activeAccordionAppears: TActiveAccordionAppears;
  onClickedAccordion?: (data: IAccordionData) => void;
  style?: IAccordionStyle;
  className?: string;
  isOpenFirstAccordion?: boolean;
}

const Accordion: FC<IAccordion> = ({
  panes,
  activeAccordionAppears,
  onClickedAccordion,
  style,
  className,
  isOpenFirstAccordion,
}) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [statusAccordion, setStatusAccordion] = useState<{
    [id: number]: TAccordionStatus;
  }>({});
  const [currentClickId, setCurrentClickId] = useState<number>(-1);
  const [prevClickId, setPrevClickId] = useState<number>(-1);
  const contentWrapperRef = useRef([]) as MutableRefObject<
    Array<HTMLDivElement | null>
  >;
  const contentRef = useRef([]) as MutableRefObject<
    Array<HTMLDivElement | null>
  >;

  const handleChangeStyleAccordion = (
    id: number,
    status: { [id: number]: TAccordionStatus }
  ) => {
    const wrapper = contentWrapperRef.current[id]!;
    const content = contentRef.current[id]!;
    if (content && wrapper) {
      const contentHeight = content.clientHeight;

      if (status[id] === "IS_OPENING") {
        wrapper.style.overflow = "initial";
        wrapper.style.height = `${contentHeight}px`;
      } else if (status[id] === "IS_CLOSING") {
        wrapper.style.overflow = "hidden";
        wrapper.style.height = `0px`;
      }
    }
  };

  const handleClickAccordion = (id: number) => {
    let newIndexes: number[] = [];
    let status: {
      [id: number]: TAccordionStatus;
    } = { ...statusAccordion };

    if (activeIndexes.includes(id)) {
      newIndexes = activeIndexes.filter((index) => index !== id);
      status[id] = "IS_CLOSING";
    } else {
      status[id] = "IS_OPENING";
      if (activeAccordionAppears === "ONE") {
        newIndexes = [id];

        if (currentClickId > -1 && activeIndexes.length > 0) {
          status[currentClickId] = "IS_CLOSING";
          handleChangeStyleAccordion(currentClickId, status);
        }
      } else if (activeAccordionAppears === "MANY") {
        newIndexes = [...activeIndexes, id];
      }
    }

    handleChangeStyleAccordion(id, status);
    setStatusAccordion(status);
    setActiveIndexes(newIndexes);
    setPrevClickId(currentClickId);
    setCurrentClickId(id);

    if (onClickedAccordion) {
      const data = {
        panes,
        activeIndexes: newIndexes,
      };

      onClickedAccordion(data);
    }
  };

  const checkAccordion = (id: number) => {
    if (id !== -1) {
      const wrapper = contentWrapperRef.current[id]!;
      const content = contentRef.current[id]!;

      if (wrapper && content) {
        const contentHeight = content.clientHeight;
        if (
          statusAccordion[id] === "IS_OPENING" &&
          statusAccordion[id] !== "IS_OPENED" &&
          wrapper.style.height === `${contentHeight}px`
        ) {
          setStatusAccordion({ ...statusAccordion, [id]: "IS_OPENED" });
        } else if (
          statusAccordion[id] === "IS_CLOSING" &&
          statusAccordion[id] !== "IS_CLOSED" &&
          wrapper.style.height === `0px`
        ) {
          setStatusAccordion({ ...statusAccordion, [id]: "IS_CLOSED" });
        }
      }
    }
  };

  useEffect(() => {
    if (isOpenFirstAccordion) {
      handleClickAccordion(0);
    }
  }, []);

  useEffect(() => {
    if (activeAccordionAppears === "ONE") {
      checkAccordion(currentClickId);
      checkAccordion(prevClickId);
    } else {
      checkAccordion(currentClickId);
    }
  });

  return (
    <Accordions
      data-testid="accordions"
      className={`accordions ${className ? className : ""}`}
    >
      {panes.map((data, id) => (
        <AccordionItem
          className={`accordion ${activeIndexes.includes(id) ? "active" : ""}`}
          key={id}
          borderColor={
            style && style.borderColor ? style.borderColor : undefined
          }
          borderRadius={
            style && style.borderRadius ? style.borderRadius : undefined
          }
        >
          <AccordionTitle
            className={"accordion-title"}
            onClick={() => handleClickAccordion(id)}
          >
            {data.title}
          </AccordionTitle>
          <AccordionContentWrapper
            className="accordion-content-wrapper"
            ref={(el) => {
              contentWrapperRef.current[id] = el;
            }}
          >
            <AccordionContent
              className="accordion-content"
              ref={(el) => {
                contentRef.current[id] = el;
              }}
            >
              {data.content}
            </AccordionContent>
          </AccordionContentWrapper>
        </AccordionItem>
      ))}
    </Accordions>
  );
};

export default Accordion;
