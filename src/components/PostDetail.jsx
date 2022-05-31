import React from "react";

// styled component
import styled from "styled-components";

// elements
import { Elbutton, Eltext } from "../elements";

// themes
import flex from "../themes/flex";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <PostDetailWrap>
        <TopBox>
          <Notice>
            <TitleText type="sub_2_bold">스터디 공지</TitleText>
            <StudyInfo type="sub_2">{props.props.studyNotice}</StudyInfo>
          </Notice>
          <Locate>
            <TitleText type="sub_2_bold">위치</TitleText>
          </Locate>
        </TopBox>
        <BottomBox>
          <StudyNote>
            <TitleText type="sub_2_bold">노트 정리</TitleText>
          </StudyNote>
        </BottomBox>
      </PostDetailWrap>
    </React.Fragment>
  );
};

export default PostDetail;

const PostDetailWrap = styled.div`
  width: 100%;
`;
const TitleText = styled(Eltext)`
  ${flex("center", "center", false)}
  color: var(--white);
  width: 100px;
  height: 35px;
  background-color: var(--point);
  border-radius: 7px;
`;
const TopBox = styled.div`
  ${flex}
`;

const Notice = styled.div`
  ${flex("start", "start", false)}
  width: 50%;
  height: 200px;
  padding-right: 20px;
  border: 1px solid red;
`;

const StudyInfo = styled(Eltext)`
  padding: 20px 10px 0 10px;
`;

const Locate = styled.div`
  ${flex("start", "start", false)}
  width: 50%;
  height: 200px;
  border: 1px solid red;
`;
const BottomBox = styled.div`
  ${flex("center", "center", true)}
`;
const StudyNote = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
`;
