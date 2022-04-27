import React from "react";
import styled from "styled-components";
import { Eltext } from "./index";

const Elinput = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        {label && <Eltext>{label}</Eltext>}
        <StTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></StTextarea>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {label && <Eltext>{label}</Eltext>}
      <StInput type={type} placeholder={placeholder} onChange={_onChange} />
    </React.Fragment>
  );
};

Elinput.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

export default Elinput;

const StInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const StTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;
