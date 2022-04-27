import React from "react";
import styled, { css } from "styled-components";

// rest 종류 : size(width_숫자만)
const Elbutton = ({ shape, children, ...rest }) => {
  switch (shape) {
    case "brown-fill":
      return (
        <BrownFill
          disabled={rest.disabled}
          color="main"
          onClick={rest._onClick}
          {...rest}
        >
          {children}
        </BrownFill>
      );
    case "brown-outline":
      return (
        <BrownLine color="main" onClick={rest._onClick} {...rest}>
          {children}
        </BrownLine>
      );
    default:
      return (
        <BrownFill color="main" onClick={rest._onClick} {...rest}>
          {children}
        </BrownFill>
      );
  }
};

const BtnDefault = css`
  ${(props) => {
    const { width, height } = props;
    return css`
      width: ${width ? `${width}px` : "100%"};
      height: ${height ? `${height}px` : "50px"};
      border: 1px solid ${(props) => `var(--${props.color})`};
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2.2rem;
      transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
    `;
  }}
  height: 50px; // 변경 가능성 있음
  border: 1px solid ${(props) => `var(--${props.color})`};
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.2rem;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  ${({ theme }) => theme.device.mobile} {
    width: ${(props) => (props.smSize ? `${props.smSize}px;` : "100%;")};
  }
`;

const FillBtn = css`
  ${BtnDefault};
  color: var(--white);
  background-color: ${(props) => `var(--${props.color})`};
  ${(props) =>
    props.disabled
      ? `background-color: var(--line); 
    color: var(--grey);
    border: 1px solid var(--grey);`
      : ""}
  &:hover {
    color: ${(props) => `var(--${props.color})`};
    background-color: var(--white);
    ${(props) =>
      props.disabled
        ? `background-color: var(--line); 
    color: var(--grey);
    border: 1px solid var(--grey)`
        : ""}
  }
`;

const LineBtn = css`
  ${BtnDefault};
  color: ${(props) => `var(--${props.color})`};
  background-color: var(--white);
  &:hover {
    color: var(--white);
    background-color: ${(props) => `var(--${props.color})`};
  }
`;

const BrownFill = styled.button`
  ${FillBtn};
`;

const BrownLine = styled.button`
  ${LineBtn};
`;

export default Elbutton;
