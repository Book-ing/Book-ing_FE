import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Eltext, Elbutton } from "../../elements";
import ElcategoryRadio from "../../elements/ElcategoryRadio";
import { mainActions } from "../../redux/modules/main";
import { actionCreators as crewActions } from "../../redux/modules/crew";

import flex from "../../themes/flex";

const ModalCrew = (props) => {
  const dispatch = useDispatch();

  // variables
  const isEdit = props.isEdit;
  const crewInfo = props.crewInfo;

  // state
  const [fileName, setFileName] = useState("");
  const [addCrewInfo, setAddCrewInfo] = useState({
    title: "",
    category: "",
    intro: "",
    region: "",
    headCount: "",
  });

  const [modifyCrewInfo, setModifyCrewInfo] = useState({
    category: "",
    intro: "",
    region: "",
  });

  const onChangeInputHandler = (e) => {
    const { value, name } = e.target;

    setAddCrewInfo({
      ...addCrewInfo,
      [name]: value,
    });
  };

  const onChangeEditInputHandler = (e) => {
    const { value, name } = e.target;

    setModifyCrewInfo({
      ...modifyCrewInfo,
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
  const ProduceDB = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];

    const newCrewInfo = {
      title: addCrewInfo.title,
      category: addCrewInfo.category,
      intro: addCrewInfo.intro,
      location: addCrewInfo.region,
      headCnt: addCrewInfo.headCount,
      image: file,
    };
    dispatch(mainActions.addCrewDB(newCrewInfo));
  };
  const handleModalClose = props.handleModalClose;

  const EditProduceDB = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];

    const editCrewInfo = {
      category: modifyCrewInfo.category,
      intro: modifyCrewInfo.intro,
      location: modifyCrewInfo.region,
      image: file,
    };
    dispatch(
      crewActions.editCrewDB(
        crewInfo.meetingId,
        editCrewInfo,
        props.handleClose
      )
    );
  };

  if (isEdit === true)
    return (
      <React.Fragment>
        <ModalWrap style={{ paddingTop: "50px" }}>
          <ModalBox>
            <form onSubmit={EditProduceDB}>
              {/* 1 STEP */}
              <TagTop type="sub_2_bold">1 STEP</TagTop>
              <InputFlexBox>
                <StInputName type="sub_2_bold">모임 이름</StInputName>
                <WarningText type="sub_2_bold">
                  수정이 불가능합니다.
                </WarningText>
              </InputFlexBox>

              <StInput
                required
                name="title"
                onChange={onChangeEditInputHandler}
                disabled
                style={{ border: "1px solid var(--notice)" }}
                value={crewInfo.meetingName}
                readOnly
              />
              {/* 카테고리 삽입 ================ Stlye 미완성 협의 후 진행예정*/}

              <div style={{ marginTop: "20px" }} />
              <StInputName type="sub_2_bold">Category</StInputName>
              <ElcategoryRadio onChange={onChangeEditInputHandler} />

              {/* 카테고리 삽입 */}

              <StInputName type="sub_2_bold">모임 소개 글</StInputName>
              <StInput
                required
                name="intro"
                placeholder={crewInfo.meetingIntro}
                onChange={onChangeEditInputHandler}
              />
              {/* 2 STEP */}
              <TagBottom type="sub_2_bold">2 STEP</TagBottom>
              <BottomBox>
                <div>
                  <StInputName type="sub_2_bold">지역</StInputName>

                  <StSelect
                    required
                    name="region"
                    onChange={onChangeEditInputHandler}
                  >
                    {SelectList.map((cur) => (
                      <option value={cur} key={cur}>
                        {cur}
                      </option>
                    ))}
                  </StSelect>
                </div>
                <div style={{ marginLeft: "75px" }}>
                  <InputFlexBox>
                    <StInputName type="sub_2_bold">인원 수 제한</StInputName>
                    <WarningText type="sub_2_bold">
                      수정이 불가능합니다.
                    </WarningText>
                  </InputFlexBox>
                  <div style={{ display: "flex" }}>
                    <StInput
                      name="headCount"
                      disabled
                      max="300"
                      type="number"
                      onChange={onChangeEditInputHandler}
                      style={{ border: "1px solid var(--notice)" }}
                      value={crewInfo.meetingLimitCnt}
                      readOnly
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
                <PostBtn shape="brown-outline">수정하기</PostBtn>
              </div>
            </form>
          </ModalBox>
        </ModalWrap>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          <form onSubmit={ProduceDB}>
            {/* 1 STEP */}
            <TagTop type="sub_2_bold">1 STEP</TagTop>
            <StInputName type="sub_2_bold">모임 이름</StInputName>
            <StInput
              required
              name="title"
              placeholder="모임 이름을 입력해주세요."
              onChange={onChangeInputHandler}
            />

            <div style={{ marginTop: "20px" }} />
            <StInputName type="sub_2_bold">Category</StInputName>
            <ElcategoryRadio onChange={onChangeInputHandler} />

            <StInputName type="sub_2_bold">모임 소개 글</StInputName>
            <StInput
              required
              name="intro"
              placeholder="모임 소개 글을 적어주세요."
              onChange={onChangeInputHandler}
            />
            {/* 2 STEP */}
            <TagBottom type="sub_2_bold">2 STEP</TagBottom>
            <BottomBox>
              <div>
                <StInputName type="sub_2_bold">지역</StInputName>

                <StSelect
                  required
                  name="region"
                  onChange={onChangeInputHandler}
                >
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
                  <div style={{ width: "205px" }}>
                    <StInput
                      required
                      name="headCount"
                      max="300"
                      min="2"
                      type="number"
                      placeholder="최대 300명 까지 가능합니다."
                      onChange={onChangeInputHandler}
                    />
                  </div>
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

const InputFlexBox = styled.div`
  ${flex("start")}
`;

const StInputName = styled(Eltext)`
  margin-bottom: 10px;
`;

const WarningText = styled(Eltext)`
  margin-left: 10px;
  margin-bottom: 10px;
  color: var(--notice);
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
