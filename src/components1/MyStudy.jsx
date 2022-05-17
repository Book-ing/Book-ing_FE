import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// elements
import { Eltext } from "../elements";

// style
import styled from "styled-components";

// theme
import flex from "../themes/flex";

// mui
import MypageAccordions from "../components/Accordion/MypageAccordion";

const MyStudy = () => {
  const dispatch = useDispatch();

  // variables
  const userId = localStorage.getItem("userId");

  // redux store
  const __myStudy = useSelector((state) => state.mypage.myStudy);

  const __joinedMyStudy = useSelector((state) => state.mypage.joinedMyCrew);

  useEffect(() => {
    dispatch(mypageActions.getMyStudyDB(userId));
  }, []);

  if (__myStudy === "") return <></>;

  return (
    <React.Fragment>
      <MyStudyWrap>
        <MyStudyBox>
          <MyStudyTopBox>
            <TitleText type="sub_1_bold">내가 만든 스터디</TitleText>
            <MyStudyItem>
              {__myStudy.map((cur, idx) => (
                <MypageAccordions {...cur} key={idx} />
              ))}
              <MypageAccordions />
            </MyStudyItem>
          </MyStudyTopBox>
          <MyStudyBottomBox>
            <TitleText type="sub_1_bold">참여한 스터디</TitleText>
            <JoinedItem>
              {/* {__joinedMyStudy.map((cur, idx) => (
                <MypageAccordions {...cur} key={idx} />
              ))} */}
            </JoinedItem>
          </MyStudyBottomBox>
        </MyStudyBox>
      </MyStudyWrap>
    </React.Fragment>
  );
};

export default MyStudy;

const MyStudyWrap = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  height: 100%;
`;

const MyStudyBox = styled.div`
  ${flex("center", "start", false)}
  width: 930px;
  margin-left: 50px;
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyStudyTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-bottom: 52px;
`;

const MyStudyItem = styled.div`
  width: 100%;
`;

const MyStudyBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
`;

const JoinedItem = styled.div`
  width: 100%;
`;
