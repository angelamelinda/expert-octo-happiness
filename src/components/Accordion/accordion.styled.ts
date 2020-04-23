import styled from "styled-components";
import { COLOR } from "../../constants";

const Accordions = styled.div``;

const Accordion = styled.div<{ borderColor?: string; borderRadius?: string }>`
  border: 1px solid ${(props) => props.borderColor || COLOR.GREY};
  border-radius: ${(props) => props.borderRadius};
  overflow: hidden;

  &.active {
    .accordion-title {
      border-color: ${(props) => props.borderColor || COLOR.GREY};
      font-weight: 700;
    }

    .accordion-content {
      opacity: 1;
    }
  }

  &:not(:last-of-type) {
    border-bottom: 0;
  }
`;

const AccordionTitle = styled.div<{ padding?: string }>`
  user-select: none;
  cursor: pointer;
  padding: ${(props) => props.padding || "15px 20px"};
  border-bottom: 1px solid transparent;
  margin-bottom: -1px;
`;

const AccordionContentWrapper = styled.div`
  transition: all 0.3s ease;
  height: 0;
  overflow: hidden;
  user-select: none;
`;

const AccordionContent = styled.div<{ padding?: string }>`
  padding: ${(props) => props.padding || "20px"};
  opacity: 0;
  transition: all 0.3s ease;
`;

export {
  Accordions,
  Accordion,
  AccordionContentWrapper,
  AccordionTitle,
  AccordionContent,
};
