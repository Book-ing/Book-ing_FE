import React from "react";
import Card from "@mui/material/Card";
import Eltext from "../elements/Eltext";
import Elimage from "../elements/Elimage";
import Elchip from "../elements/Elchip";
import styled from "styled-components";
import Elcategory from "../elements/Elcategory";
import Ellocation from "../elements/Ellocation";
import { history } from "../redux/configStore";

const MyCrewCard = (myCrewInfo) => {
  const info = myCrewInfo.myCrewInfo;

  return (
    <React.Fragment>
      <StButton>
        <Card
          onClick={() => {
            history.push(`/crew/${info.meetingId}`);
          }}
          style={{
            border: "none",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            margin: "10px 0px 0px 70px",
          }}
          variant="outlined"
          sx={{ maxWidth: 325, height: 460 }}
        >
          <CardGrid>
            <Eltext type="sub_2_bold">
              <TagGrid>
                <Ellocation width="85px" height="25px">
                  {info.meetingLocation}
                </Ellocation>

                <Elcategory
                  shape={info.meetingCategory}
                  color="white"
                  width="85px"
                  height="25px"
                >
                  <div style={{ paddingBottom: "2px" }}>
                    {info.meetingCategory}
                  </div>
                </Elcategory>
              </TagGrid>
            </Eltext>

            <ImgGrid>
              <Elimage shape="cardImg" src={info.meetingImage} />
            </ImgGrid>

            <div
              style={{
                marginLeft: "17px",
                width: "290px",
                height: "145px",
                marginTop: "-15px",
              }}
            >
              <Eltext type="head_8_bold">
                <TitleGrid>{info.meetingName}</TitleGrid>
              </Eltext>

              <div
                style={{
                  display: "flex",
                  width: "265px",
                  justifyContent: "space-between",
                }}
              >
                <Elchip width="125px" shape="Fill" height="25px">
                  <Eltext type="sub_2_bold" color="white">
                    <div style={{ paddingBottom: "2px" }}>
                      ???????????? : {info.meetingPeopleCnt}???
                    </div>
                  </Eltext>
                </Elchip>

                <Elchip width="125px" shape="Fill" height="25px">
                  <Eltext type="sub_2_bold" color="white">
                    <div style={{ paddingBottom: "2px" }}>
                      ????????? : {info.meetingStudyCnt}???
                    </div>
                  </Eltext>
                </Elchip>
              </div>

              <Eltext type="body_3">
                <SubGird>{info.meetingIntro}</SubGird>
              </Eltext>
            </div>
          </CardGrid>
        </Card>
      </StButton>
    </React.Fragment>
  );
};

MyCrewCard.defaultProps = {
  meetingName: "The Alchemist study",
  meetingCategory: "?????????",
  meetingLocation: "??????",
  meetingImage:
    "https://image.trevari.co.kr/f236d0ae-5845-4bbf-b31f-1eb297187d9e.png",
  meetingIntro:
    "??????99 ???????????? ?????? ????????? ?????? ?????????????????????. ????????? ????????????! ????????? ??????????????? ?????????!",
  categoryId: "construction",
};

export default MyCrewCard;

const CardGrid = styled.div`
  width: 325px;
  height: 460px;
  background-color: var(--white);
`;
const ImgGrid = styled.div`
  position: relative;
  margin: 9px 17px 0px 20px;
  top: -35px;
  width: 285px;
  height: 285px;
`;
const TitleGrid = styled.div`
  width: 290px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagGrid = styled.div`
  position: relative;
  top: 20px;
  left: 23px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 175px;
  height: 30px;
  margin-top: 10px;
`;

const SubGird = styled.div`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ????????? */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 65px;
`;

const StButton = styled.button`
  text-align: left;
`;
