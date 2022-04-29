import React, { useState } from "react";
import styled from "styled-components";
import { Eltext } from "../../elements";

import flex from "../../themes/flex";

const ModalCrew = () => {
  const SelectList = [
    "지역을 선택해주세요",
    "서울",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];

  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          <form>
            {/* 1 STEP */}
            <TagTop type="sub_2_bold">1 STEP</TagTop>
            <StInputName type="sub_2_bold">모임 이름</StInputName>
            <StInput
              placeholder="모임 이름을 입력해주세요."
              onChange={() => {}}
            ></StInput>
            <div
              style={{
                margin: "15px 0",
                width: "100%",
                height: "142px",
                border: "1px solid red",
              }}
            >
              카테고리
            </div>
            <StInputName type="sub_2_bold">모임 소개 글</StInputName>
            <StInput
              placeholder="모임 소개 글을 적어주세요."
              onChange={() => {}}
            ></StInput>
            {/* 2 STEP */}
            <TagBottom type="sub_2_bold">2 STEP</TagBottom>
            <BottomBox>
              <div>
                <StInputName type="sub_2_bold">지역</StInputName>
                <StSelect onChange={() => {}}>
                  {SelectList.map((cur) => (
                    <option value={cur} key={cur}>
                      {cur}
                    </option>
                  ))}
                </StSelect>
              </div>
            </BottomBox>
          </form>
        </ModalBox>
      </ModalWrap>
    </React.Fragment>
  );
};

export default ModalCrew;

const ModalWrap = styled.div`
  ${flex("center", "center", false)}
  height: 100%;
`;

const ModalBox = styled.div`
  border: 1px solid red;
  width: 980px;
  height: 727px;
`;

const TagTop = styled(Eltext)`
  ${flex("center")}
  width: 147px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  background-color: var(--point);
  margin-bottom: 20px;
`;

const TagBottom = styled(Eltext)`
  ${flex("center")}
  width: 118px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  background-color: var(--point);
  margin: 45px 0 20px 0;
`;

const BottomBox = styled.div`
  ${flex("start", "center", true)}
`;

const StInputName = styled(Eltext)``;

const StInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--point);
`;

const StSelect = styled.select`
  width: 230px;
  height: 30px;
  border: 1px solid var(--point);
  border-radius: 3px;
`;
