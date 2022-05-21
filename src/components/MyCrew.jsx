import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// elements
import { Eltext } from "../elements";

// style
import styled from "styled-components";

// theme
import flex from "../themes/flex";
import MypageCard from "./MypageCard";

const MyCrew = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId")

  // redux store
  const __myCrew = useSelector((state) => state.mypage.myCrew.data.myMeeting);
  const __joinedMyCrew = useSelector((state) => state.mypage.joinedMyCrew.data.joinedMeeting);

  console.log(__myCrew)
  console.log(__joinedMyCrew)
  
  useEffect(() => {
    dispatch(mypageActions.getCrewDB(userId));
  }, []);

  useEffect(() => {
    dispatch(mypageActions.getJoinedCrewDB(userId));
  }, []);



  if (__myCrew === "" || __joinedMyCrew === "") return <></>;

  return (
    <React.Fragment>
      <MyCrewWrap>
        <MyCrewBox>
          <MyCrewTopBox>
            <TitleText type="sub_1_bold">내가 만든 모임</TitleText>
            <MyCrewItem>
              {JSON.stringify(__myCrew) === "{}" ? (
                <DataNull type="sub_2">내가 생성한 모임이 없습니다.</DataNull>
              ) : (
                <MypageCard {...__myCrew} />
              )}
            </MyCrewItem>
          </MyCrewTopBox>
          <MyCrewBottomBox>
            <TitleText type="sub_1_bold">가입 된 모임</TitleText>
            <JoinedItem>
              {__joinedMyCrew.map((cur, idx) => (
                <MypageCard {...cur} key={idx} />
              ))}
            </JoinedItem>
          </MyCrewBottomBox>
        </MyCrewBox>
      </MyCrewWrap>
    </React.Fragment>
  );
};

export default MyCrew;

const MyCrewWrap = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  height: 100%;
`;

const MyCrewBox = styled.div`
  ${flex("center", "start", false)}
  width: 80%;
  margin-left: 50px;
`;

const DataNull = styled(Eltext)`
  color: var(--gray);
  text-align: center;
  padding: 20px 0;
  margin: auto;
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyCrewTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-bottom: 52px;
`;

const MyCrewItem = styled.div`
  width: 100%;
`;

const MyCrewBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
`;

const JoinedItem = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
`;
