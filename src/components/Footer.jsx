import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

// mui
import { FaGitAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import { SiNotion } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { SiSitepoint } from "react-icons/si";

// assets
import LogoSrc from "../assets/bookingLogo.svg";
import MinwooImg from "../assets/teamatesImg/minwooImg.png";
import BaeseungImg from "../assets/teamatesImg/baeseungImg.png";
import TaakeImg from "../assets/teamatesImg/taakeImg.png";
import Seoyoon from "../assets/teamatesImg/seoyoon.png";
import Jihyun from "../assets/teamatesImg/jihyun.jpeg";
import Velog from "../assets/footerIcons/velogIcon.svg";
import Tstory from "../assets/footerIcons/tstoryIcon.svg";

import flex from "../themes/flex";
import { Eltext } from "../elements";
import { Avatar } from "@mui/material";

const Footer = () => {
  const haksunText = "while(!sleep) { coding(); }";
  const taakeText = "console.log( { Taak-e : Developer } )";
  return (
    <React.Fragment>
      <FooterWrap>
        <FooterBox>
          <FooterInnerBox>
            <FooterInnerLeftBox>
              <FooterInnerLeftTopBox>
                <FooterLogo src={LogoSrc}></FooterLogo>
                <FooterInfo type="body_2">
                  카페에서 부터 집까지
                  <br />
                  당신이 원하는 공간에서 진행하는 북스터디!
                  <br />
                  북잉은 당신의 편안함과
                  <br />
                  지적 호기심을 채워주기 위해
                  <br />
                  항상 더 나은 서비스를 제공합니다.
                </FooterInfo>
              </FooterInnerLeftTopBox>
              <FooterInnerLeftBottomBox>
                <TeamName type="sub_2_bold">Team. Book-ing</TeamName>
                <MailBox>
                  <CircleBackground>
                    <IoMailSharp fontSize={25} />
                  </CircleBackground>
                  <MailTextBox>
                    <MailTitle type="sub_2_bold">Mail</MailTitle>
                    <MailAddr type="sub_2_bold">
                      devteambooking@gmail.com
                    </MailAddr>
                  </MailTextBox>
                </MailBox>
                <IconBox>
                  <button
                    onClick={() => {
                      window.open("https://github.com/Book-ing", "_blank");
                    }}
                  >
                    <CircleBackground>
                      <FaGitAlt fontSize={27} />
                    </CircleBackground>
                  </button>
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/team.book.ing/",
                        "_blank"
                      );
                    }}
                  >
                    <CircleBackground>
                      <FiInstagram />
                    </CircleBackground>
                  </button>
                </IconBox>
                <FooterCopyright type="body_2">
                  2022 BOOK-ing Co.All rights Reserved.
                </FooterCopyright>
              </FooterInnerLeftBottomBox>
            </FooterInnerLeftBox>

            <FooterInnerRightBox>
              {/* 백엔드 팀원 정보 */}
              <FooterInnerRightMemberBox>
                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/101091570?v=4"
                      }
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">
                        유학선
                        <span style={{ marginLeft: "5px", color: "#989696" }}>
                          리더
                        </span>
                      </MemberName>
                      <MemberPosition type="body_2_bold">
                        Back-End NodeJs
                      </MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">{haksunText}</MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open("https://github.com/hakseon-yoo", "_blank");
                      }}
                    >
                      <FaGitAlt
                        fontSize={30}
                        style={{ marginRight: "10px", color: `var(--point)` }}
                      />
                    </button>
                    <button onClick={() => {}}>
                      <SiNotion
                        fontSize={30}
                        style={{ color: `var(--point)` }}
                      />
                    </button>
                  </MemberLinks>
                </EachBox>

                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={BaeseungImg}
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">김배승</MemberName>
                      <MemberPosition type="body_2_bold">
                        Back-End NodeJs
                      </MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">
                    코딩아 사랑해 뽀뽀쪽 우리 영원하자❤️
                  </MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open("https://github.com/MoingXTwice", "_blank");
                      }}
                    >
                      <FaGitAlt
                        fontSize={30}
                        style={{ marginRight: "10px", color: `var(--point)` }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://velog.io/@sckbs1314", "_blank");
                      }}
                    >
                      {/* 벨로그 이미지로 수정해야함 */}
                      <img
                        alt=""
                        src={Velog}
                        style={{
                          width: "28px",
                          height: "28px",
                        }}
                      />
                    </button>
                  </MemberLinks>
                </EachBox>

                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={
                        "https://avatars.githubusercontent.com/u/86738462?v=4"
                      }
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">서호진</MemberName>
                      <MemberPosition type="body_2_bold">
                        Back-End NodeJs
                      </MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">
                    const coding = bolt
                  </MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open("https://github.com/ho-bolt", "_blank");
                      }}
                    >
                      <FaGitAlt
                        fontSize={30}
                        style={{ marginRight: "10px", color: `var(--point)` }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://www.notion.so/Node-js-dcc5ba00020b43bb8130fba049ed7f1c",
                          "_blank"
                        );
                      }}
                    >
                      <SiNotion
                        fontSize={30}
                        style={{ color: `var(--point)` }}
                      />
                    </button>
                  </MemberLinks>
                </EachBox>
              </FooterInnerRightMemberBox>

              {/* 프론트엔드 팀원 정보 */}
              <FooterInnerRightMemberBox>
                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={MinwooImg}
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">
                        박민우
                        <span style={{ marginLeft: "5px", color: "#989696" }}>
                          부리더
                        </span>
                      </MemberName>
                      <MemberPosition type="body_2_bold">
                        Front-End React
                      </MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">
                    const game = develop
                  </MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open(
                          "https://github.com/MinwooPark93",
                          "_blank"
                        );
                      }}
                    >
                      <FaGitAlt
                        fontSize={30}
                        style={{ marginRight: "10px", color: `var(--point)` }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://hickory-wave-70a.notion.site/DEV-NOTE-1effc6229db241c8b05ba992d6593694",
                          "_blank"
                        );
                      }}
                    >
                      <SiNotion
                        fontSize={30}
                        style={{ color: `var(--point)` }}
                      />
                    </button>
                  </MemberLinks>
                </EachBox>

                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={TaakeImg}
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">김주탁</MemberName>
                      <MemberPosition type="body_2_bold">
                        Front-End React
                      </MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">{taakeText}</MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open("https://github.com/Taak-e", "_blank");
                      }}
                    >
                      <FaGitAlt
                        fontSize={30}
                        style={{ marginRight: "10px", color: `var(--point)` }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://taak-e.tistory.com/", "_blank");
                      }}
                    >
                      {/* 티스토리 아이콘으로 변경해야함 */}
                      <img
                        alt=""
                        src={Tstory}
                        style={{
                          width: "28px",
                          height: "28px",
                        }}
                      />
                    </button>
                  </MemberLinks>
                </EachBox>
              </FooterInnerRightMemberBox>

              {/* 디자이너 팀원 정보 */}
              <FooterInnerRightMemberBox>
                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={Seoyoon}
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">최서윤</MemberName>
                      <MemberPosition type="body_2_bold">Design</MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">
                    let seoyoon =<br />
                    planner+designer+developer
                  </MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open(
                          "http://yunisportfolio.creatorlink.net/",
                          "_blank"
                        );
                      }}
                      style={{ fontSize: 30, color: "var(--point)" }}
                    >
                      <SiSitepoint />
                    </button>
                  </MemberLinks>
                </EachBox>

                <EachBox>
                  <MemberInfo>
                    <Avatar
                      src={Jihyun}
                      sx={{ width: "45px", height: "45px" }}
                    />
                    <TextBox>
                      <MemberName type="body_2_bold">정지현</MemberName>
                      <MemberPosition type="body_2_bold">Design</MemberPosition>
                    </TextBox>
                  </MemberInfo>
                  <MemberOneLinePr type="body_2">
                    UX/UI 디자이너입니다.
                  </MemberOneLinePr>
                  <MemberLinks>
                    <button
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/design_hyeony",
                          "_blank"
                        );
                      }}
                      style={{ fontSize: 30, color: "var(--point)" }}
                    >
                      <FiInstagram />
                    </button>
                  </MemberLinks>
                </EachBox>
              </FooterInnerRightMemberBox>
            </FooterInnerRightBox>
          </FooterInnerBox>
        </FooterBox>
      </FooterWrap>
    </React.Fragment>
  );
};

export default Footer;

const FooterWrap = styled.div`
  ${flex("center", "center", true)}
  width: 100%;
  background-color: #fff;
  margin-top: auto;
`;

const FooterBox = styled.div`
  ${flex("center", "center")}
  width: 1200px;
  height: 620px;
`;

const FooterInnerBox = styled.div`
  ${flex("between", "center")}
  width: 1000px;
  height: 500px;
`;

const FooterInnerLeftBox = styled.div`
  ${flex("start", "start", false)}
  width: 30%;
  height: 100%;
`;

const FooterInnerLeftTopBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
`;

const FooterLogo = styled.img`
  width: 195px;
  height: 75px;
  margin-bottom: 20px;
`;

const FooterInfo = styled(Eltext)`
  color: var(--gray);
`;

const FooterInnerLeftBottomBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
`;

const TeamName = styled(Eltext)`
  color: var(--point);
  margin-bottom: 20px;
`;

const MailBox = styled.div`
  ${flex}
  margin-bottom: 10px;
`;

const IconBox = styled.div`
  ${flex("center", "center", true)}
  margin-bottom: 10px;
`;

const FooterCopyright = styled(Eltext)`
  color: var(--gray);
`;

const CircleBackground = styled.div`
  ${flex("center", "center", false)}
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: var(--main);
  color: var(--point);

  font-size: 25px;
`;

const MailTextBox = styled.div`
  ${flex("start", "start", false)}
`;

const MailTitle = styled(Eltext)`
  color: var(--gray);
`;

const MailAddr = styled(Eltext)`
  color: var(--point);
`;

const FooterInnerRightBox = styled.div`
  ${flex("start", "start", false)}
  width: 70%;
  height: 100%;
`;

const FooterInnerRightMemberBox = styled.div`
  ${flex("start", "center", true)}
  margin-bottom: 60px;
`;

const EachBox = styled.div`
  ${flex("start", "start", false)}
  min-width: 200px;
  height: 110px;
  margin-right: 20px;
`;

const MemberInfo = styled.div`
  ${flex("start", "center")}
`;

const TextBox = styled.div`
  ${flex("start", "start", false)}
  margin-left: 10px;
`;

const MemberName = styled(Eltext)`
  color: var(--point);
`;

const MemberPosition = styled(Eltext)`
  color: var(--gray);
`;

const MemberOneLinePr = styled(Eltext)`
  color: var(--gray);
  margin-bottom: 10px;
`;

const MemberLinks = styled.div`
  ${flex}
`;
