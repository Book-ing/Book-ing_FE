import React from "react";

// mui
import { Avatar, Grid } from "@mui/material";

// styled components
import styled from "styled-components";

// themes
import flex from "../../themes/flex";
import { Eltext } from "../../elements";

const EachMember = (props) => {
  // variables
  const masterProfile = props.MasterProfile;
  const together = props.together;

  if (masterProfile)
    return (
      <MemberWrap>
        <Avatar
          sx={{ width: 30, height: 30 }}
          src={masterProfile.profileImage}
        />
        <MemberInfo>
          <MemberName type="sub_2_bold">{masterProfile.nickname}</MemberName>
          <MemberStatusMsg type="sub_2">
            {masterProfile.statusMessage}
          </MemberStatusMsg>
        </MemberInfo>
      </MemberWrap>
    );
  else if (together)
    return (
      <MemberWrap>
        <Avatar sx={{ width: 30, height: 30 }} src={together.profileImage} />
        <MemberInfo>
          <MemberName type="sub_2_bold">{together.username}</MemberName>
          <MemberStatusMsg type="sub_2">
            {together.statusMessage}
          </MemberStatusMsg>
        </MemberInfo>
      </MemberWrap>
    );
};

export default EachMember;

const MemberWrap = styled.div`
  ${flex("start")}
  min-width: 230px;
  height: 44px;
  float: left;
  margin: 10px 10px 10px 0;
`;

const MemberInfo = styled.div`
  ${flex("center", "start", false)}
  margin-left: 20px;
  width: 100%;
`;

const MemberName = styled(Eltext)`
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MemberStatusMsg = styled(Eltext)`
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
