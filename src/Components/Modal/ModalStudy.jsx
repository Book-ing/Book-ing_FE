import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Eltext, Elbutton } from "../../elements";
import { studyActions } from "../../redux/modules/study";
import moment from "moment";

import PopupPostCode from "../DaumPostCode/PopupPostCode";

import flex from "../../themes/flex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import PopupBookSearch from "../BookSearch/PopupBookSearch";
import { useParams } from "react-router-dom";

const ModalStudy = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const bookInfo = useSelector((state) => state.book);
  // const bookInfo = useSelector((state) => state.book.list)
  // console.log(bookInfo)
  console.log(params.meetingId);

  const postInfo = useSelector((state) => state.postcode);
  // console.log(postInfo)

  // react datepicker 상태관리

  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate)

  const day = moment(startDate).format("YYYY-MM-DD HH:mm");
  // console.log(day)

  // BookSearch 팝업창 상태관리
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  // BookSearch 팝업창 열기
  const openBookSearch = () => {
    setIsOpenPopup(true);
  };

  // BookSearch 팝업창 닫기
  const closeBookSearch = () => {
    setIsOpenPopup(false);
  };

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // state
  const [addStudyInfo, setAddStudyInfo] = useState({
    title: "",
    headCount: "",
    price: "",
    addDetail: "",
    notice: "",
  });

  const onChangeInputHandler = (e) => {
    const { value, name } = e.target;

    setAddStudyInfo({
      ...addStudyInfo,
      [name]: value,
    });
  };

  // dispatch function for axios
  const ProduceDB = (e) => {
    e.preventDefault();

    const newStudyInfo = {
      meetingId: Number(params.meetingId),
      studyTitle: addStudyInfo.title,
      studyDateTime: day,
      studyAddr: postInfo.jibunAdd,
      studyAddrDetail: addStudyInfo.addDetail,
      studyLimitCnt: addStudyInfo.headCount,
      studyPrice: addStudyInfo.price,
      studyNotice: addStudyInfo.notice,
      studyBookTitle: bookInfo.name,
      studyBookImg: bookInfo.imgURL,
      studyBookInfo: bookInfo.desc,
      studyBookWriter: bookInfo.writer,
      studyBookPurblisher: bookInfo.publisher,
    };
    console.log(newStudyInfo);
    dispatch(studyActions.addStudyDB(newStudyInfo));
  };
  const handleModalClose = props.handleModalClose;

  const studyInfoForModal = props.studyInfo;
  console.log(studyInfoForModal);

  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          <form onSubmit={ProduceDB}>
            <TagTop type="sub_2_bold">스터디 기본정보</TagTop>
            {props.isEdit === true ? (
              <StInput
                name="title"
                placeholder={studyInfoForModal.studyTitle}
                onChange={onChangeInputHandler}
              />
            ) : (
              <StInput
                name="title"
                placeholder="스터디 타이틀 명을 입력해주세요."
                onChange={onChangeInputHandler}
              />
            )}

            <div
              className="중간 큰 박스"
              style={{ display: "flex", height: "272px" }}
            >
              <div className="중간 작은 박스1" style={{ marginRight: "10px" }}>
                <StInputName type="sub_2_bold" marginTop="16px">
                  일시
                </StInputName>
                <StInputName type="sub_2_bold" marginTop="25px">
                  인원 수 제한
                </StInputName>
                <StInputName type="sub_2_bold" marginTop="25px">
                  금액
                </StInputName>
              </div>

              <div
                className="중간 작은 박스2"
                style={{
                  verticalAlign: "center",
                  marginRight: "60px",
                }}
              >
                <Eltext type="sub_2">
                  {/* react-datepicker  */}
                  <StDateInput width="230px" marginTop="16px">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      locale={ko}
                      showTimeSelect
                      timeFormat="p"
                      timeIntervals={10}
                      dateFormat="yyyy년 MM월 dd일 HH시 mm분"
                    />
                  </StDateInput>
                  {/* 편법 div 로 감싸지 않으면 display:flex 와 같이 가로정렬이 됨 Input 속성 태그만 쭉 펼쳐짐... */}
                  <div>
                    {props.isEdit === true ? (
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        max="300"
                        min="2"
                        type="number"
                        placeholder={studyInfoForModal.studyLimitCnt}
                        onChange={onChangeInputHandler}
                        disabled
                        style={{ border: "1px solid var(--notice)" }}
                      />
                    ) : (
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        max="300"
                        min="2"
                        type="number"
                        placeholder="최대 300명까지 가능합니다."
                        onChange={onChangeInputHandler}
                      />
                    )}
                    &nbsp;&nbsp;명
                  </div>
                  {props.isEdit === true ? (
                    <StInput
                      width="205px"
                      marginTop="16px"
                      name="price"
                      max="50000"
                      min="500"
                      step="500"
                      type="number"
                      placeholder={studyInfoForModal.studyPrice}
                      onChange={onChangeInputHandler}
                    />
                  ) : (
                    <StInput
                      width="205px"
                      marginTop="16px"
                      name="price"
                      max="50000"
                      min="500"
                      step="500"
                      type="number"
                      placeholder="500원 단위로 설정가능합니다."
                      onChange={onChangeInputHandler}
                    />
                  )}
                  &nbsp;&nbsp;원
                </Eltext>
              </div>

              <div className="중간 작은 박스3" style={{ marginRight: "24px" }}>
                <StInputName type="sub_2_bold" marginTop="16px">
                  우편번호 찾기
                </StInputName>
                <StInputName type="sub_2_bold" marginTop="88px">
                  책정보
                </StInputName>
              </div>

              <div
                className="중간 작은 박스4"
                style={{
                  // border:"1px solid black",
                  width: "475px",
                  height: "236px",
                  marginTop: "16px",
                  display: "inline-block",
                }}
              >
                <Eltext type="sub_2">
                  <StInput
                    width="131px"
                    float="left"
                    name="postCode"
                    // id="postCode"
                    placeholder={postInfo.zonecode}
                    onChange={onChangeInputHandler}
                  />
                  {/* 버튼 클릭 시 팝업 생성 */}
                  <StPostBtn type="button" onClick={openPostCode}>
                    우편번호 찾기
                  </StPostBtn>
                  {/* 팝업 생성 기준 div */}
                  {/* <div id='popupDom'> */}
                  {isPopupOpen && (
                    // <PopupDom>
                    <PopupPostCode onClose={closePostCode} />
                    // </PopupDom>
                  )}
                  {/* </div> */}
                  {/* 편법 div 로 감싸지 않으면 display:flex 와 같이 가로정렬이 됨 Input 속성 태그만 쭉 펼쳐짐... */}

                  <StInput
                    width="228px"
                    marginTop="6px"
                    name="roadAdd"
                    // id="roadAddress"
                    placeholder={postInfo.roadAdd}
                    onChange={onChangeInputHandler}
                  />

                  <StInput
                    width="228px"
                    marginTop="6px"
                    marginLeft="14px"
                    name="jibunAdd"
                    placeholder={postInfo.jibunAdd}
                    onChange={onChangeInputHandler}
                  />

                  <StInput
                    width="470px"
                    marginTop="6px"
                    name="addDetail"
                    placeholder="건물명 등 상세주소를 입력해주세요."
                    onChange={onChangeInputHandler}
                  />

                  <StInput
                    width="147px"
                    marginTop="8px"
                    name="bookSearch"
                    placeholder="책 찾아보기"
                    onClick={openBookSearch}
                  />

                  <StPostBtn
                    style={{ marginTop: "8px" }}
                    type="button"
                    onClick={openBookSearch}
                  >
                    책 정보 찾기
                  </StPostBtn>

                  {/* <div id='popupDom'> */}
                  {isOpenPopup && (
                    // <PopupDom>
                    <PopupBookSearch onClose={closeBookSearch} />
                    // </PopupDom>
                  )}
                  {/* </div> */}

                  <div
                    className="책정보 Box"
                    style={{
                      width: "480px",
                      height: "108px",
                      marginTop: "8px",
                      display: "flex",
                    }}
                  >
                    <div
                      className="책 프리뷰이미지"
                      style={{
                        width: "73px",
                        height: "107px",
                        border: "1px solid black",
                        backgroundImage: `url(${bookInfo.imgURL})`,
                        backgroundSize: "contain",
                      }}
                    ></div>

                    <div
                      className="책 정보 소개"
                      style={{
                        width: "391px",
                        height: "108px",
                        marginLeft: "13px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        overflow: "scroll",
                      }}
                    >
                      <div style={{ fontWeight: "bold" }}>{bookInfo.name}</div>
                      <div>지은이: {bookInfo.writer}</div>
                      <div>출판사: {bookInfo.publisher}</div>
                      <div>{bookInfo.desc}...</div>
                    </div>
                  </div>
                </Eltext>
              </div>
            </div>

            <TagTop type="sub_2_bold">스터디 공지</TagTop>

            <textarea
              name="notice"
              onChange={onChangeInputHandler}
              style={{
                width: "978px",
                height: "251px",
                border: "1px solid black",
              }}
            ></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {props.isEdit === true ? (
                <PostBtn shape="brown-outline">수정하기</PostBtn>
              ) : (
                <PostBtn shape="brown-outline">게시하기</PostBtn>
              )}
            </div>
          </form>
        </ModalBox>
      </ModalWrap>
    </React.Fragment>
  );
};

export default ModalStudy;

const ModalWrap = styled.div`
  ${flex("center", "center", false)}
  height: 100%;
`;

const ModalBox = styled.div`
  width: 980px;
  height: 755px;
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
`;

const StDateInput = styled.div`
  ${(props) => (props.width ? `width: ${props.width}` : "width:100%")};
  ${(props) =>
    props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto"};
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft}` : "")};
  ${(props) => (props.float ? `float: ${props.float}` : "")};
  height: 30px;
  padding-left: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--point);
`;
// const TagBottom = styled(Eltext)`
//   ${flex("center")}
//   width: 118px;
//   height: 35px;
//   border-radius: 5px;
//   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
//   color: #fff;
//   background-color: var(--point);
//   margin: 45px 0 20px 0;
// `;

// const BottomBox = styled.div`
//   ${flex("start", "center", true)}
//   margin-bottom: 15px;
// `;
const StPostBtn = styled.button`
  width: 118px;
  height: 30px;
  border: 1px solid var(--point);
  color: var(--point);
  border-radius: 6px;
  margin-left: 14px;
  &:hover {
    color: white;
    background-color: var(--point);
  }
`;

const StInputName = styled(Eltext)`
  ${(props) =>
    props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto"};
`;

const StInput = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : "width:100%")};
  ${(props) =>
    props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto"};
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft}` : "")};
  ${(props) => (props.float ? `float: ${props.float}` : "")};
  height: 30px;
  padding-left: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--point);
`;

// const StSelect = styled.select`
//   width: 230px;
//   height: 30px;
//   border: 1px solid var(--point);
//   border-radius: 3px;
// `;

// const FileInputBox = styled.div`
//   ${flex("start")}
// `;

const PostBtn = styled(Elbutton)`
  width: 148px;
  height: 46px;
  margin-top: 45px;
  border-radius: 6px;
`;

// const SearchContainer = styled.div`
//     width: 80%;
//     margin: 0 auto;
//     margin-bottom: 10px;
// `;

// const ResultContainer = styled.div`

//   width: 400px;
//   height: 700px;
//   border: 1px solid black;
//   overflow: scroll;

// `;
