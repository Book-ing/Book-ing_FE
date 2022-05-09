import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Eltext, Elbutton } from "../../elements";
import { mainActions } from "../../redux/modules/main";


import PopupDom from "../DaumPostCode/PopupDom";
import PopupPostCode from "../DaumPostCode/PopupPostCode";


import flex from "../../themes/flex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PopupBookSearch from "../BookSearch/PopupBookSearch";

const ModalStudy = (props) => {
  const dispatch = useDispatch();

  // react datepicker 상태관리
  const [startDate, setStartDate] = useState(new Date());



  // BookSearch 팝업창 상태관리
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  // BookSearch 팝업창 열기
  const openBookSearch = () => {
    setIsOpenPopup(true)
  }

  // BookSearch 팝업창 닫기
  const closeBookSearch = () => {
    setIsOpenPopup(false)
  }



  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }



  // state
  const [addStudyInfo, setAddStudyInfo] = useState({
    title: "",
    category: "",
    intro: "",
    region: "",
    headCount: "",
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

    const newCrewInfo = {
      name: addStudyInfo.title,
      category: addStudyInfo.category,
      intro: addStudyInfo.intro,
      location: addStudyInfo.region,
      cnt: addStudyInfo.headCount,

    }
    // console.log(newCrewInfo);
    // dispatch(mainActions.addCrewDB(newCrewInfo));
  };
  const handleModalClose = props.handleModalClose
  return (
    <React.Fragment>
      <ModalWrap>
        <ModalBox>
          <form onSubmit={ProduceDB}>

            <TagTop type="sub_2_bold">스터디 기본정보</TagTop>
            <StInput
              name="title"
              placeholder="스터디 타이틀 명을 입력해주세요."
              onChange={onChangeInputHandler}
            />


    <div className="중간 큰 박스" style={{display:"flex", height:"272px"}}>

    <div className="중간 작은 박스1" style={{ marginRight:"10px"}}>
            <StInputName type="sub_2_bold" marginTop="16px">일시</StInputName>
            <StInputName type="sub_2_bold" marginTop="25px">인원 수 제한</StInputName>
            <StInputName type="sub_2_bold" marginTop="25px">금액</StInputName>
            </div>

    <div className="중간 작은 박스2" style={{
      verticalAlign:"center", marginRight:"60px"}}>
        <Eltext type="sub_2">

          {/* react-datepicker  */}
           <StDateInput width="230px" marginTop="16px">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              // locale="fr-FR"
              showTimeSelect
              timeFormat="p"
              timeIntervals={10}
              dateFormat="Pp"
            />
           </StDateInput>


            {/* 편법 div 로 감싸지 않으면 display:flex 와 같이 가로정렬이 됨 Input 속성 태그만 쭉 펼쳐짐... */}
            <div>   
            <StInput width="205px" marginTop="16px"
              name="headCount"
              max="300"
              min="2"
              type="number"
              placeholder="최대 300명까지 가능합니다."
              onChange={onChangeInputHandler}
              />&nbsp;&nbsp;명
            </div>
             

            <StInput width="205px" marginTop="16px"
              name="price"
              max="50000"
              min="500"
              step="500"
              type="number"
              placeholder="500원 단위로 설정가능합니다."
              onChange={onChangeInputHandler}
              />&nbsp;&nbsp;원


        </Eltext>
    </div>


    <div className="중간 작은 박스3" style={{ marginRight:"24px"}}>
        <StInputName type="sub_2_bold" marginTop="16px">우편번호 찾기</StInputName>
        <StInputName type="sub_2_bold" marginTop="88px">책정보</StInputName>
    </div>

    <div className="중간 작은 박스4" style={{
      // border:"1px solid black",
              width:"475px", height:"236px", marginTop:"16px", display:"inline-block"}}>
            
        <Eltext type="sub_2">

            <StInput width="131px" float="left"
              name="title"
              id="postCode"
              placeholder="우편번호"
              onChange={onChangeInputHandler}
            /> 	
            {/* 버튼 클릭 시 팝업 생성 */}
            <StPostBtn type='button' onClick={openPostCode}>우편번호 찾기</StPostBtn>
            {/* 팝업 생성 기준 div */}
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
            {/* 편법 div 로 감싸지 않으면 display:flex 와 같이 가로정렬이 됨 Input 속성 태그만 쭉 펼쳐짐... */}
             
              <StInput width="228px" marginTop="6px"
              name="headCount"
              id="roadAddress"
              placeholder="도로명 주소"
              onChange={onChangeInputHandler}
              />
         
            
              <StInput width="228px" marginTop="6px" marginLeft="14px"
              name="title"
              id="jibunAddress"
              placeholder="지번 주소"
              onChange={onChangeInputHandler}
              />

              <StInput width="470px" marginTop="6px"
              name="headCount"
              id="buildingName"
              placeholder="상세 주소를 직접 입력해주세요."
              onChange={onChangeInputHandler}
              />

              <StInput width="147px" marginTop="8px"
              name="headCount"
              placeholder="책 찾아보기"
              onChange={onChangeInputHandler}
              />

              <StPostBtn style={{marginTop:"8px"}}
              type='button' onClick={openBookSearch}>
                책 정보 찾기
              </StPostBtn>

              <div id='popupDom'>
                  {isOpenPopup && (
                    <PopupDom>
                      <PopupBookSearch onClose={closeBookSearch}/>
                    </PopupDom>
                  )}


              </div>

          <div className="책정보 Box" 
            style={{width:"480px", height:"108px", marginTop:"8px", display:"flex"}}>
              
              <div className="책 프리뷰이미지"
              style={{width:"73px", height:"107px", border:"1px solid black"}}>
              미리보기
              </div>

              <div className="책 정보 소개"
              style={{width:"391px", height:"108px", marginLeft:"13px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
              책 정보 소개
              </div>

          </div>
          </Eltext>
    </div>
  </div>
           


            <TagTop type="sub_2_bold">스터디 공지</TagTop>
            
            <textarea name="textarea" style={{
              width:"978px", height:"251px", border: "1px solid black"
              
              }}>

            </textarea>
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
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto")};
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft}` : "")};
  ${(props) => (props.float ? `float: ${props.float}` : "")};
  height: 30px;
  padding-left: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--point);
`
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
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto")};
`;

const StInput = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : "width:100%")};
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop}` : "margin-top:auto")};
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