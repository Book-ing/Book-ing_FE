import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Eltext, Elbutton } from "../../elements";
import ElcategoryRadio from "../../elements/ElcategoryRadio";

import flex from "../../themes/flex";

const ModalCrew = (props) => {
  const dispatch = useDispatch();

  // state
  const [fileName, setFileName] = useState("");
  const [modalCrewInfo, setModalCrewInfo] = useState({
    title: "",
    category: "",
    intro: "",
    region: "",
    headCount: "",
  });

  const onChangeInputHandler = (e) => {
    const { value, name } = e.target;
    setModalCrewInfo({
      ...modalCrewInfo,
      [name]: value,
    });
  };

  const fileInput = React.useRef();

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

  // dispatch function for axios
  const ProduceCrewDB = (e) => {
    e.preventDefault();
    console.log(modalCrewInfo);
    const file = fileInput.current.files[0];
    console.log(file);
    // dispatch(actionCreators.ProduceCrewDB(modalCrewInfo, file));
  };

  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          <form onSubmit={ProduceCrewDB}>
            {/* 1 STEP */}
            <TagTop type="sub_2_bold">1 STEP</TagTop>
            <StInputName type="sub_2_bold">모임 이름</StInputName>
            <StInput
              name="title"
              placeholder="모임 이름을 입력해주세요."
              onChange={onChangeInputHandler}
            />
            {/* 카테고리 삽입 */}
            
            <ElcategoryRadio/>
            {/* <input id="개새야" type="radio"/>
            <label htmlFor="개새야">안녕하세요</label>
            <input id="개새야1" type="radio"/>
            <label htmlFor="개새야1">안녕하세요</label>
            <input id="개새야2" type="radio"/>
            <label htmlFor="개새야2">안녕하세요</label> */}
            {/* 카테고리 삽입 */}
            <StInputName type="sub_2_bold">모임 소개 글</StInputName>
            <StInput
              name="intro"
              placeholder="모임 소개 글을 적어주세요."
              onChange={onChangeInputHandler}
            />
            {/* 2 STEP */}
            <TagBottom type="sub_2_bold">2 STEP</TagBottom>
            <BottomBox>
              <div>
                <StInputName type="sub_2_bold">지역</StInputName>
                <StSelect name="region" onChange={onChangeInputHandler}>
                  {SelectList.map((cur) => (
                    <option value={cur} key={cur}>
                      {cur}
                    </option>
                  ))}
                </StSelect>
              </div>
              <div style={{ marginLeft: "75px" }}>
                <StInputName type="sub_2_bold">인원 수 제한</StInputName>
                <div style={{ display: "flex" }}>
                  <StInput
                    name="headCount"
                    max="300"
                    type="number"
                    placeholder="최대 300명 까지 가능합니다."
                    onChange={onChangeInputHandler}
                  />
                  <StInputName type="sub_2" style={{ marginLeft: "10px" }}>
                    명
                  </StInputName>
                </div>
              </div>
            </BottomBox>
            <StInputName type="sub_2_bold">모임 이미지</StInputName>
            <FileInputBox>
              <FileInputBtn
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                <FileInputName type="sub_2_bold">파일 선택</FileInputName>
              </FileInputBtn>
              <UploadedFileName type="sub_2">
                {fileName.name
                  ? fileName.name
                  : "이미지 파일을 업로드 하지 않을 시, 고정 이미지가 업로드 됩니다."}
              </UploadedFileName>
              <input
                id="file"
                ref={fileInput}
                onChange={(e) => setFileName(e.target.files[0])}
                type="file"
                style={{ display: "none" }}
              />
            </FileInputBox>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PostBtn shape="brown-outline">게시하기</PostBtn>
            </div>
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
  margin-bottom: 15px;
`;

const StInputName = styled(Eltext)`
  margin-bottom: 10px;
`;

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

const FileInputBox = styled.div`
  ${flex("start")}
`;

const FileInputName = styled(Eltext)`
  color: #fff;
  transition: 300ms ease-in-out;
`;
const FileInputBtn = styled.label`
  ${flex("center", "center", true)}
  width: 129px;
  height: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: var(--point);
  transition: 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 1px solid var(--point);
    ${FileInputName} {
      color: var(--black);
    }
  }
`;

const UploadedFileName = styled(Eltext)`
  width: 129px;
  height: 30px;
  width: 100%;
  color: var(--gray);
  border: 1px solid var(--point);
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  text-overflow: ellipsis;
`;

const PostBtn = styled(Elbutton)`
  width: 148px;
  height: 46px;
  margin-top: 45px;
  border-radius: 6px;
`;
