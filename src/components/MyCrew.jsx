import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// elements
import { Eltext, Elbutton } from "../elements";

// style
import styled from "styled-components";

// theme
import flex from "../themes/flex";
import MypageCard from "./MypageCard";
import { hiddenScroll } from "../themes/hiddenScroll";

const MyCrew = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = localStorage.getItem("userId");

  // redux store
  const __myCrew = useSelector((state) => state.mypage.myCrew.data.myMeeting);
  const __joinedMyCrew = useSelector(
    (state) => state.mypage.joinedMyCrew.data.joinedMeeting
  );

  // console.log(__myCrew);
  console.log(JSON.stringify(__joinedMyCrew));

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
              {JSON.stringify(__myCrew) === undefined ? (
                <div style={{margin:"30px auto", textAlign:"center"}}>
                  <br />
                  <DataNull type="body_1_bold">
                    내가 만든 모임이 없습니다😋
                  </DataNull>
                </div>
              ) : (
                <StCardBtn
                  onClick={() => {
                    history.push(`/crew/${__myCrew.meetingId}`);
                  }}
                >
                  <MypageCard {...__myCrew} />
                </StCardBtn>
              )}
            </MyCrewItem>
          </MyCrewTopBox>
          <MyCrewBottomBox>
            <TitleText type="sub_1_bold">가입 된 모임</TitleText>
            <JoinedItem>
              {JSON.stringify(__joinedMyCrew) === "[]" ? 
              (
                
                  <div style={{margin:"150px auto", textAlign:"center"}}>
                  <DataNull type="body_1_bold">
                    내가 가입한 모임이 없습니다😋
                  </DataNull>
                  <GoSearchBtn shape="brown-outline" onClick={() => {history.push("/")
                  }}>
                    모임 보러가기
                  </GoSearchBtn>
                  </div>
                
              )
              :
              (__joinedMyCrew.map((cur, idx) => (
                <StCardBtn
                  key={idx}
                  onClick={() => {
                    history.push(`/crew/${cur.meetingId}`);
                  }}
                >
                  <MypageCard {...cur} key={idx} />
                </StCardBtn>
              )))
            }
            </JoinedItem>
          </MyCrewBottomBox>
        </MyCrewBox>
      </MyCrewWrap>
    </React.Fragment>
  );
};

export default MyCrew;

const MyCrewWrap = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
`;

const MyCrewBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  padding-left: 50px;
`;

const DataNull = styled(Eltext)`
  color: var(--gray);
  /* text-align: center; */
  padding: 20px 0;
  /* margin: auto; */
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyCrewTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-top: 40px;
  margin-bottom: 52px;
`;

const MyCrewItem = styled.div`
  width: 890px;
`;

const MyCrewBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
`;

const JoinedItem = styled.div`
  width: 890px;
  max-height: 790px;
  overflow-y: auto;
`;

const StCardBtn = styled.button`
  text-align: left;
`;

const GoSearchBtn = styled(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
