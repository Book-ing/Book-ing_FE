import React from "react";
import styled from "styled-components";
import {
  head_1,
  head_1_bold,
  head_2,
  head_2_bold,
  head_3,
  head_3_bold,
  head_4,
  head_4_bold,
  head_5,
  head_5_bold,
  head_6,
  head_6_bold,
  head_7,
  head_7_bold,
  sub_1,
  sub_1_bold,
  sub_2,
  sub_2_bold,
  body_1,
  body_1_bold,
  body_2,
  body_2_bold,
  body_3,
  body_3_bold,
  body_4,
  body_4_bold,
  button,
  button_bold,
} from "../themes/textStyle";

const Eltext = ({ children, ...rest }) => {
  return (
    <Wrapper onClick={rest._onClick} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ type }) => {
    switch (type) {
      case "head_1":
        return `${head_1}`;
      case "head_1_bold":
        return `${head_1_bold}`;
      case "head_2":
        return `${head_2}`;
      case "head_2_bold":
        return `${head_2_bold}`;
      case "head_3":
        return `${head_3}`;
      case "head_3_bold":
        return `${head_3_bold}`;
      case "head_4":
        return `${head_4}`;
      case "head_4_bold":
        return `${head_4_bold}`;
      case "head_5":
        return `${head_5}`;
      case "head_5_bold":
        return `${head_5_bold}`;
      case "head_6":
        return `${head_6}`;
      case "head_6_bold":
        return `${head_6_bold}`;
      case "head_7":
        return `${head_7}`;
      case "head_7_bold":
        return `${head_7_bold}`;
      case "sub_1":
        return `${sub_1}`;
      case "sub_1_bold":
        return `${sub_1_bold}`;
      case "sub_2":
        return `${sub_2}`;
      case "sub_2_bold":
        return `${sub_2_bold}`;
      case "body_1":
        return `${body_1}`;
      case "body_1_bold":
        return `${body_1_bold}`;
      case "body_2":
        return `${body_2}`;
      case "body_2_bold":
        return `${body_2_bold}`;
      case "body_3":
        return `${body_3}`;
      case "body_3_bold":
        return `${body_3_bold}`;
      case "body_4":
        return `${body_4}`;
      case "body_4_bold":
        return `${body_4_bold}`;
      case "button":
        return `${button}`;
      case "button_bold":
        return `${button_bold}`;
      default:
        return;
    }
  }}
  color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--fontColor)`};
`;

export default Eltext;
