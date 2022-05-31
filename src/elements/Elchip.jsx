import React from "react";
import styled from "styled-components";
import flex from "../themes/flex";

// rest 종류 : size(width_숫자만)
const Elchip = (props) => {
  const { shape, width, height, onClick, children } = props;

  const styles = {
    width: width,
    height: height,
    onClick: onClick,
  };

  if (shape === "Fill") {
    return <BrownFill {...styles}>{children}</BrownFill>;
  }
  if (shape === "Line") {
    return <BrownLine {...styles}>{children}</BrownLine>;
  }
  if (shape === "FillBtn") {
    return <FillButton {...styles}>{children}</FillButton>;
  }
  if (shape === "LineBtn") {
    return <LineButton {...styles}>{children}</LineButton>;
  }
};

const BrownFill = styled.div`
  ${(props) => (props.width ? `width: ${props.width}` : "width:80px")};
  ${(props) => (props.height ? `height: ${props.height}` : "height:50px")};
  ${flex("center", "center", false)}
  text-align: center;
  border: 1px solid #815854;
  background-color: #815854;
  color: white;
  border-radius: 6px;
`;

const BrownLine = styled.div`
  ${(props) => (props.width ? `width: ${props.width}` : "width:80px")};
  ${(props) => (props.height ? `height: ${props.height}` : "height:50px")};
  ${flex("center", "center", false)}
  border: 1px solid #815854;
  color: #815854;
  border-radius: 6px;
`;

const FillButton = styled.button`
  ${(props) => (props.width ? `width: ${props.width}` : "width:80px")};
  ${(props) => (props.height ? `height: ${props.height}` : "height:50px")};
  ${flex("center", "center", false)}
  text-align: center;
  border: 1px solid #815854;
  background-color: #815854;
  color: white;
  border-radius: 6px;
`;

const LineButton = styled.button`
  ${(props) => (props.width ? `width: ${props.width}` : "width:80px")};
  ${(props) => (props.height ? `height: ${props.height}` : "height:50px")};
  ${(props) => (props.onClick ? `onClick= ${props.onClick}` : "")};
  ${flex("center", "center", false)}
  border: 1px solid #815854;
  color: #815854;
  border-radius: 6px;
  &:hover {
    color: white;
    background-color: #815854;
  }
`;

export default Elchip;
