import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

// themes
import flex from "../../themes/flex";

const SearchBar = ({ getSearchCrew }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 검색항목 관리 State
  const [searchCrew, setSearchCrew] = useState("");

  // 검색값 전달하기 위한 함수 선언 (수정해야할 사항이 있음 로직 불안정)
  const sendSearchCrew = (e) => {
    e.preventDefault();
    if (!e.currentTarget.value || e.currentTarget.value === "")
      // console.log(searchCrew);
      getSearchCrew(searchCrew, dispatch, history);
    // history.push("/search");
    else alert("검색어를 입력해주세요");
  };

  // const handleKeyPress = (e) => {
  //   if(e.key === 'Enter') {
  //     e.preventDefault();
  //     if (!e.currentTarget.value || e.currentTarget.value === '')
  //     // console.log(searchCrew);
  //     getSearchCrew(searchCrew);
  //   }
  // }
  // Enter 키 검색 기능 구현 추가로 만들예정

  return (
    <React.Fragment>
      <form onSubmit={sendSearchCrew}>
        <StSearchBox>
          <StInputLine>
            <StInput
              name="title"
              placeholder="&nbsp;&nbsp;&nbsp;원하는 모임을 검색해주세요."
              value={searchCrew}
              onChange={(e) => setSearchCrew(e.currentTarget.value)}
              // onKeyPress={handleKeyPress}
            />
            {/* <StSearchBtn onClick={sendSearchCrew}> */}
            <IconBox>
              <Link to="/search">
                <SearchIcon fontSize="large" />
                {/* <SearchIcon fontSize="large" /> */}
              </Link>
            </IconBox>
            {/* </StSearchBtn> */}
          </StInputLine>
        </StSearchBox>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;

const StSearchBox = styled.div`
  ${flex("center", "center", false)}
  max-width: 1000px;
  margin: auto;
`;

const StInputLine = styled.div`
  ${flex("between")}
  width: 100%;
  height: 35px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--point);
`;

const StInput = styled.input`
  min-width: 900px;
  height: 35px;
  background-color: transparent;
`;

const IconBox = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`;
