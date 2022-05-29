import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// elements
import { Eltext } from "../elements";

// components
<<<<<<< HEAD
<<<<<<< HEAD
import MyStudyAccordions from "./MyStudyAccordion/Accordion";
import MyJoinedAccordions from "./MyJoinedAccordion/Accordion";
=======
import MypageAccordions from "../components/MypageAccordion/Accordion";
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
=======
import MyStudyAccordions from "./MyStudyAccordion/Accordion";
import MyJoinedAccordions from "./MyJoinedAccordion/Accordion";
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)

// style
import styled from "styled-components";

// theme
import flex from "../themes/flex";
<<<<<<< HEAD
<<<<<<< HEAD
import { hiddenScroll } from "../themes/hiddenScroll";
=======
=======
import { hiddenScroll } from "../themes/hiddenScroll";
>>>>>>> 490fc3e (page(Main): 수정사항 반영 후 커밋)

>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)

const MyStudy = () => {
  const dispatch = useDispatch();

  // variables
  const userId = localStorage.getItem("userId");


  // redux store
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
<<<<<<< HEAD
=======

<<<<<<< HEAD
  // const __myStudy = useSelector((state) => state.mypage.myStudy);

  // const __joinedMyStudy = useSelector((state) => state.mypage.joinedMyCrew);

  // console.log(__myStudy)

  // useEffect(() => {
  //   dispatch(mypageActions.getMyStudyDB());
  // }, []);

  useEffect(() => {
    dispatch(mypageActions.getJoinedStudyDB());
  }, []);

  // if (__myStudy === "" || __joinedMyStudy === "") return <></>;
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)

  return (
    <React.Fragment>
      <MyStudyWrap>
        <MyStudyBox>
          <MyStudyTopBox>
            <TitleText type="sub_1_bold">내가 만든 스터디</TitleText>
            <MyStudyItem>
<<<<<<< HEAD
<<<<<<< HEAD
              <AccordionSection>
                <MyStudyAccordions
                  isJoinedCrew={__isJoinedCrew}
                ></MyStudyAccordions>
              </AccordionSection>
=======
              {/* {__myStudy.map((cur, idx) => (
                <MypageAccordions {...cur} key={idx} />
              ))} */}
              {/* <MypageAccordions /> */}
=======
          
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
              
            <AccordionSection>
                <MyStudyAccordions 
                  isJoinedCrew={__isJoinedCrew}>

                </MyStudyAccordions>
              </AccordionSection>


<<<<<<< HEAD

>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
            </MyStudyItem>
          </MyStudyTopBox>
          <MyStudyBottomBox>
            <TitleText type="sub_1_bold">참여한 스터디</TitleText>
            <JoinedItem>
<<<<<<< HEAD
              <AccordionSection>
                <MyJoinedAccordions
                  isJoinedCrew={__isJoinedCrew}
                ></MyJoinedAccordions>
              </AccordionSection>
=======


            <AccordionSection>
                <MyJoinedAccordions 
                  isJoinedCrew={__isJoinedCrew}>

                </MyJoinedAccordions>
              </AccordionSection>


<<<<<<< HEAD

>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
            </JoinedItem>
          </MyStudyBottomBox>
        </MyStudyBox>
      </MyStudyWrap>
    </React.Fragment>
  );
};

export default MyStudy;

const MyStudyWrap = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  overflow: auto;
  /* ${hiddenScroll}; */
`;

const MyStudyBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  padding-left: 50px;
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyStudyTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin: 30px 0 52px 0;
`;

const MyStudyItem = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
  width: 920px;
  max-height: 545px;
  overflow-y: auto;
  /* box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5); */
<<<<<<< HEAD
=======
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
<<<<<<< HEAD
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
=======
=======
  width: 1000px;
  max-height: 800px;
  overflow-y: scroll;
  /* ${hiddenScroll}; */
>>>>>>> 490fc3e (page(Main): 수정사항 반영 후 커밋)
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
`;

const MyStudyBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-top: -30px;
`;

const JoinedItem = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
  width: 920px;
  max-height: 545px;
  overflow-y: auto;  
  /* box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5); */
<<<<<<< HEAD
`;

const AccordionSection = styled.div`
  width: 900px;
  margin: auto;
=======
  width: 100%;
=======
  width: 1000px;
>>>>>>> 490fc3e (page(Main): 수정사항 반영 후 커밋)
  max-height: 500px;
  overflow-y: scroll;
  ${hiddenScroll};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
`;

const AccordionSection = styled.div`
  width: 900px;
  margin: auto;
`;
