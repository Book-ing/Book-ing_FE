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
import { Radio } from "@mui/material";

const ModalStudy = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  // study online/offline 을 위한 state
  const [selectData, setSelectData] = useState("online");

  const bookInfo = useSelector((state) => state.book);

  const postInfo = useSelector((state) => state.postcode);

  
  // datepicker 현재시간 이전 시간 제한하기
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    
    return currentDate.getTime()+3600000 < selectedDate.getTime();
  };
  // react datepicker 상태관리
  const [startDate, setStartDate] = useState(filterPassedTime);
  // console.log(startDate)
  
  const day = moment(startDate).format("YYYY-MM-DD HH:mm");

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

  const studyInfoForModal = props.studyInfo;

  // dispatch function for axios
  const ProduceDB = (e) => {
    e.preventDefault();

    const newStudyInfo = {
      studyType: selectData,
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
      studyBookPublisher: bookInfo.publisher,
    }
    
    startDate === false ? 
    alert("일시를 설정해주세요!" )
    : 
    (startDate.getHours() === 0 ?  
      alert("스터디 일시는 현재로부터 1시간 이후로 선택가능합니다!")
      : dispatch(studyActions.addStudyDB(newStudyInfo))) 

  };

  const editStudyInfoDB = (e) => {
    e.preventDefault();

    const editStudyInfo = {
      studyType: props.studyInfo.studyType,
      studyId: studyInfoForModal.studyId,
      studyTitle: addStudyInfo.title,
      studyDateTime: day,
      meetingId: Number(params.meetingId),
      studyAddr: postInfo.jibunAdd,
      studyAddrDetail: addStudyInfo.addDetail,
      studyPrice: addStudyInfo.price,
      studyNotice: addStudyInfo.notice,
      studyBookTitle: bookInfo.name,
      studyBookImg: bookInfo.imgURL,
      studyBookInfo: bookInfo.desc,
      studyBookWriter: bookInfo.writer,
      studyBookPublisher: bookInfo.publisher,
    };
    startDate === false ? 
    alert("일시를 설정해주세요!" )
    : 
    (startDate.getHours() === 0 ?  
      alert("스터디 일시는 현재로부터 1시간 이후로 선택가능합니다!")
      : dispatch(studyActions.editStudyDB(editStudyInfo)))
  };

  const handleStudyTypeChange = (e) => {
    setSelectData(e.target.value);
  };

  const ProduceOnlineDB = (e) => {
    e.preventDefault();

    const newOnlineStudyInfo = {
      studyType: selectData,
      meetingId: Number(params.meetingId),
      studyTitle: addStudyInfo.title,
      studyDateTime: day,
      studyLimitCnt: addStudyInfo.headCount,
      studyNotice: addStudyInfo.notice,
      studyBookTitle: bookInfo.name,
      studyBookImg: bookInfo.imgURL,
      studyBookInfo: bookInfo.desc,
      studyBookWriter: bookInfo.writer,
      studyBookPublisher: bookInfo.publisher,
    };
    
    startDate === false ? 
    alert("일시를 설정해주세요!" )
    : 
    (startDate.getHours() === 0 ?  
      alert("스터디 일시는 현재로부터 1시간 이후로 선택가능합니다!")
      : dispatch(studyActions.addOnlineStudyDB(newOnlineStudyInfo)))
  };

  const editOnlineStudyInfoDB = (e) => {
    e.preventDefault();

    const editOnlineStudyInfo = {
      studyType: props.studyInfo.studyType,
      studyId: studyInfoForModal.studyId,
      studyTitle: addStudyInfo.title,
      studyDateTime: day,
      meetingId: Number(params.meetingId),
      studyNotice: addStudyInfo.notice,
      studyBookTitle: bookInfo.name,
      studyBookImg: bookInfo.imgURL,
      studyBookInfo: bookInfo.desc,
      studyBookWriter: bookInfo.writer,
      studyBookPublisher: bookInfo.publisher,
    };

    startDate === false ? 
    alert("일시를 설정해주세요!" )
    : 
    (startDate.getHours() === 0 ?  
      alert("스터디 일시는 현재로부터 1시간 이후로 선택가능합니다!")
      : dispatch(studyActions.editOnlineStudyInfoDB(editOnlineStudyInfo)))
  };

  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          {props.isEdit === true && props.studyInfo.studyType === "online" ? (
            // 온라인 수정상태일때의 모달창
            <form onSubmit={editOnlineStudyInfoDB}>
              <TagTop type="sub_2_bold">스터디 기본정보</TagTop>
              <StInput
                name="title"
                placeholder="스터디 타이틀 명을 입력해주세요."
                onChange={onChangeInputHandler}
                required
              />

              <div
                className="중간 큰 박스"
                style={{ display: "flex", height: "272px" }}
              >
                <div
                  className="중간 작은 박스1"
                  style={{ marginRight: "10px" }}
                >
                  <StInputName type="sub_2_bold" marginTop="16px">
                    일시
                  </StInputName>
                  <StInputName type="sub_2_bold" marginTop="25px">
                    인원 수 제한
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
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        locale={ko}
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={10}
                        dateFormat="yyyy년 MM월 dd일 HH시 mm분"
                        placeholderText="시간을 선택해주세요"
                      />
                    </StDateInput>
                    <div>
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        max="300"
                        min="2"
                        type="number"
                        placeholder={studyInfoForModal.studyLimitCnt}
                        onChange={onChangeInputHandler}
                        disabed
                        readOnly
                        style={{ border: "1px solid var(--notice)" }}
                      />
                      &nbsp;&nbsp;명
                    </div>
                  </Eltext>
                </div>

                <div
                  className="중간 작은 박스3"
                  style={{ marginRight: "24px" }}
                >
                  <StInputName type="sub_2_bold" marginTop="16px">
                    책정보
                  </StInputName>
                </div>

                <div
                  className="중간 작은 박스4"
                  style={{
                    width: "475px",
                    height: "236px",
                    display: "inline-block",
                  }}
                >
                  <Eltext type="sub_2">
                    <StInput
                      width="147px"
                      marginTop="16px"
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

                    {isOpenPopup && (
                      <PopupBookSearch onClose={closeBookSearch} />
                    )}

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
                          backgroundImage: `url(${props.studyInfo.studyBookImg})`,
                          backgroundSize: "contain",
                        }}
                      ></div>

                      <div
                        className="책 정보 소개"
                        style={{
                          width: "395px",
                          height: "108px",
                          marginLeft: "13px",
                          // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          overflow: "scroll",
                          overflowX: "hidden",
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>
                          {props.studyInfo.studyBookTitle}
                        </div>
                        <div>지은이 : {props.studyInfo.studyBookWriter}</div>
                        <div>출판사 : {props.studyInfo.studyBookPublisher}</div>
                        <div>소개 : {props.studyInfo.studyBookInfo}...</div>
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
                required
              ></textarea>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PostBtn shape="brown-outline">수정하기</PostBtn>
              </div>
            </form>
          ) : props.isEdit === true ? (
            // 수정상태일때의 오프라인 모달창
            <form onSubmit={editStudyInfoDB}>
              <TagTop type="sub_2_bold">스터디 기본정보</TagTop>

              <StInput
                name="title"
                placeholder={studyInfoForModal.studyTitle}
                onChange={onChangeInputHandler}
                required
              />

              <div
                className="중간 큰 박스"
                style={{ display: "flex", height: "272px" }}
              >
                <div
                  className="중간 작은 박스1"
                  style={{ marginRight: "10px" }}
                >
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
                    <StDateInput width="230px" marginTop="16px" backgorundColor="black">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        locale={ko}
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={10}
                        dateFormat="yyyy년 MM월 dd일 HH시 mm분"
                        placeholderText="시간을 선택해주세요"
                      />
                    </StDateInput>
                    <div>
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        max="300"
                        min="2"
                        type="number"
                        placeholder={studyInfoForModal.studyLimitCnt}
                        onChange={onChangeInputHandler}
                        disabed
                        readOnly
                        style={{ border: "1px solid var(--notice)" }}
                      />
                      &nbsp;&nbsp;명
                    </div>
                    <StInput
                      width="205px"
                      marginTop="16px"
                      name="price"
                      max="50000"
                      min="0"
                      step="500"
                      type="number"
                      placeholder={studyInfoForModal.studyPrice}
                      onChange={onChangeInputHandler}
                      required
                    />
                    &nbsp;&nbsp;원
                  </Eltext>
                </div>

                <div
                  className="중간 작은 박스3"
                  style={{ marginRight: "24px" }}
                >
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
                      placeholder={postInfo.zoneCode}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    {/* 버튼 클릭 시 팝업 생성 */}
                    <StPostBtn type="button" onClick={openPostCode}>
                      우편번호 찾기
                    </StPostBtn>
                    {/* 팝업 생성 기준 div */}
                    {isPopupOpen && <PopupPostCode onClose={closePostCode} />}

                    <StInput
                      width="228px"
                      marginTop="6px"
                      name="roadAdd"
                      // id="roadAddress"
                      placeholder={postInfo.roadAdd}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    <StInput
                      width="228px"
                      marginTop="6px"
                      marginLeft="14px"
                      name="jibunAdd"
                      placeholder={postInfo.jibunAdd}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    <StInput
                      width="470px"
                      marginTop="6px"
                      name="addDetail"
                      placeholder="건물명 등 상세주소를 입력해주세요."
                      onChange={onChangeInputHandler}
                      required
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

                    {isOpenPopup && (
                      <PopupBookSearch onClose={closeBookSearch} />
                    )}

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
                          backgroundImage: `url(${props.studyInfo.studyBookImg})`,
                          backgroundSize: "contain",
                        }}
                      ></div>

                      <div
                        className="책 정보 소개"
                        style={{
                          width: "395px",
                          height: "108px",
                          marginLeft: "13px",
                          overflow: "scroll",
                          overflowX: "hidden",
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>
                          {props.studyInfo.studyBookTitle}
                        </div>
                        <div>지은이 : {props.studyInfo.studyBookWriter}</div>
                        <div>출판사 : {props.studyInfo.studyBookPublisher}</div>
                        <div>소개 : {props.studyInfo.studyBookInfo}...</div>
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
                placeholder={studyInfoForModal.studyNotice}
                required
              ></textarea>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PostBtn shape="brown-outline">수정하기</PostBtn>
              </div>
            </form>
          ) : selectData === "online" ? (
            // 온라인 생성 상태일때의 모달창
            <form onSubmit={ProduceOnlineDB}>
              <TagTop type="sub_2_bold">스터디 기본정보</TagTop>
              <div>
                <label style={{ fontSize: "16px" }}>
                  <Radio
                    value="online"
                    checked={selectData === "online"}
                    onChange={handleStudyTypeChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                  온라인
                </label>
                <label style={{ fontSize: "16px" }}>
                  <Radio
                    value="offline"
                    checked={selectData === "offline"}
                    onChange={handleStudyTypeChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                  오프라인
                </label>
              </div>
              <StInput
                name="title"
                placeholder="스터디 타이틀 명을 입력해주세요."
                onChange={onChangeInputHandler}
                required
              />

              <div
                className="중간 큰 박스"
                style={{ display: "flex", height: "272px" }}
              >
                <div
                  className="중간 작은 박스1"
                  style={{ marginRight: "10px" }}
                >
                  <StInputName type="sub_2_bold" marginTop="16px">
                    일시
                  </StInputName>
                  <StInputName type="sub_2_bold" marginTop="25px">
                    인원 수 제한
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
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        locale={ko}
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={10}
                        dateFormat="yyyy년 MM월 dd일 HH시 mm분"
                        placeholderText="시간을 선택해주세요"
                      />
                    </StDateInput>
                    <div>
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        // max="10"
                        max={
                          props.meetingLimitCnt >= 10
                            ? 10
                            : props.meetingLimitCnt
                        }
                        min="2"
                        type="number"
                        placeholder={`최대 ${
                          props.meetingLimitCnt >= 10
                            ? 10
                            : props.meetingLimitCnt
                        }명까지 가능합니다.`}
                        onChange={onChangeInputHandler}
                        required
                      />
                      &nbsp;&nbsp;명
                    </div>
                  </Eltext>
                </div>

                <div
                  className="중간 작은 박스3"
                  style={{ marginRight: "24px" }}
                >
                  <StInputName type="sub_2_bold" marginTop="16px">
                    책정보
                  </StInputName>
                </div>

                <div
                  className="중간 작은 박스4"
                  style={{
                    width: "475px",
                    height: "236px",
                    display: "inline-block",
                  }}
                >
                  <Eltext type="sub_2">
                    <StInput
                      width="147px"
                      marginTop="16px"
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

                    {isOpenPopup && (
                      <PopupBookSearch onClose={closeBookSearch} />
                    )}

                    <div
                      className="책정보 Box"
                      style={{
                        width: "480px",
                        height: "108px",
                        marginTop: "8px",
                        display: "flex",
                      }}
                    >
                      {bookInfo.name === "" ? (
                        <></>
                      ) : (
                        <>
                          <div
                            className="책 프리뷰이미지"
                            style={{
                              width: "73px",
                              height: "107px",
                              backgroundImage: `url(${bookInfo.imgURL})`,
                              backgroundSize: "contain",
                            }}
                          ></div>

                          <div
                            className="책 정보 소개"
                            style={{
                              width: "395px",
                              height: "108px",
                              marginLeft: "13px",
                              overflow: "scroll",
                              overflowX: "hidden",
                            }}
                          >
                            <div style={{ fontWeight: "bold" }}>
                              {bookInfo.name}
                            </div>
                            <div>지은이 : {bookInfo.writer}</div>
                            <div>출판사 : {bookInfo.publisher}</div>
                            <div>소개 : {bookInfo.desc}...</div>
                          </div>
                        </>
                      )}
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
                required
              ></textarea>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PostBtn shape="brown-outline">게시하기</PostBtn>
              </div>
            </form>
          ) : (
            // 오프라인 생성 상태일때의 모달창
            <form onSubmit={ProduceDB}>
              <TagTop type="sub_2_bold">스터디 기본정보</TagTop>
              <div>
                <label style={{ fontSize: "16px" }}>
                  <Radio
                    value="online"
                    checked={selectData === "online"}
                    onChange={handleStudyTypeChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                  온라인
                </label>
                <label style={{ fontSize: "16px" }}>
                  <Radio
                    value="offline"
                    checked={selectData === "offline"}
                    onChange={handleStudyTypeChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                  오프라인
                </label>
              </div>
              <StInput
                name="title"
                placeholder="스터디 타이틀 명을 입력해주세요."
                onChange={onChangeInputHandler}
                required
              />

              <div
                className="중간 큰 박스"
                style={{ display: "flex", height: "272px" }}
              >
                <div
                  className="중간 작은 박스1"
                  style={{ marginRight: "10px" }}
                >
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
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        locale={ko}
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={10}
                        dateFormat="yyyy년 MM월 dd일 HH시 mm분"
                        placeholderText="시간을 선택해주세요"
                      />
                    </StDateInput>
                    <div>
                      <StInput
                        width="205px"
                        marginTop="16px"
                        name="headCount"
                        max={props.meetingLimitCnt}
                        min="2"
                        type="number"
                        placeholder={`최대 ${props.meetingLimitCnt}명까지 가능합니다.`}
                        onChange={onChangeInputHandler}
                        required
                      />
                      &nbsp;&nbsp;명
                    </div>
                    <StInput
                      width="205px"
                      marginTop="16px"
                      name="price"
                      max="50000"
                      min="0"
                      step="500"
                      type="number"
                      placeholder="500원 단위로 설정가능합니다."
                      onChange={onChangeInputHandler}
                      required
                    />
                    &nbsp;&nbsp;원
                  </Eltext>
                </div>

                <div
                  className="중간 작은 박스3"
                  style={{ marginRight: "24px" }}
                >
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
                      placeholder={postInfo.zoneCode}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    {/* 버튼 클릭 시 팝업 생성 */}
                    <StPostBtn type="button" onClick={openPostCode}>
                      우편번호 찾기
                    </StPostBtn>
                    {/* 팝업 생성 기준 div */}

                    {isPopupOpen && <PopupPostCode onClose={closePostCode} />}

                    <StInput
                      width="228px"
                      marginTop="6px"
                      name="roadAdd"
                      placeholder={postInfo.roadAdd}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    <StInput
                      width="228px"
                      marginTop="6px"
                      marginLeft="14px"
                      name="jibunAdd"
                      placeholder={postInfo.jibunAdd}
                      onChange={onChangeInputHandler}
                      onClick={openPostCode}
                    />

                    <StInput
                      width="470px"
                      marginTop="6px"
                      name="addDetail"
                      placeholder="건물명 등 상세주소를 직접 입력해주세요!"
                      onChange={onChangeInputHandler}
                      required
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

                    {isOpenPopup && (
                      <PopupBookSearch onClose={closeBookSearch} />
                    )}

                    <div
                      className="책정보 Box"
                      style={{
                        width: "480px",
                        height: "108px",
                        marginTop: "8px",
                        display: "flex",
                      }}
                    >
                      {bookInfo.name === "" ? (
                        <></>
                      ) : (
                        <>
                          <div
                            className="책 프리뷰이미지"
                            style={{
                              width: "73px",
                              height: "107px",
                              backgroundImage: `url(${bookInfo.imgURL})`,
                              backgroundSize: "contain",
                            }}
                          ></div>

                          <div
                            className="책 정보 소개"
                            style={{
                              width: "395px",
                              height: "108px",
                              marginLeft: "13px",
                              overflow: "scroll",
                              overflowX: "hidden",
                            }}
                          >
                            <div style={{ fontWeight: "bold" }}>
                              {bookInfo.name}
                            </div>
                            <div>지은이 : {bookInfo.writer}</div>
                            <div>출판사 : {bookInfo.publisher}</div>
                            <div>소개 : {bookInfo.desc}...</div>
                          </div>
                        </>
                      )}
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
                required
              ></textarea>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PostBtn shape="brown-outline">게시하기</PostBtn>
              </div>
            </form>
          )}
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

const PostBtn = styled(Elbutton)`
  width: 148px;
  height: 46px;
  margin-top: 45px;
  border-radius: 6px;
`;
