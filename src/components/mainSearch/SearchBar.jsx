import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import styled from 'styled-components';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ getSearchCrew }) => {
  // 검색항목 관리 State
  const [searchCrew, setSearchCrew] = useState('');
  
  // 검색값 전달하기 위한 함수 선언 (수정해야할 사항이 있음 로직 불안정)
  const sendSearchCrew = (e) => { 
      e.preventDefault();
      if (!e.currentTarget.value || e.currentTarget.value === '') 
      // console.log(searchCrew);
      getSearchCrew(searchCrew);
      // history.push("/search");
      else alert('검색어를 입력해주세요');
  }

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
          placeholder="원하는 모임을 검색해주세요."
          value={searchCrew}
          onChange={e => setSearchCrew(e.currentTarget.value)}
          // onKeyPress={handleKeyPress}
        />
        <StSearchBtn onClick={sendSearchCrew}>
        <Link to="/search">
            <SearchIcon fontSize="large" />
          {/* <SearchIcon fontSize="large" /> */}
          </Link>
        </StSearchBtn>
      </StInputLine>
      </StSearchBox>
      </form>
      </React.Fragment>
  );
};

export default SearchBar;

const StSearchBox = styled.div`
  display: flex;
  width: 1440px;
  margin-left: 130px;
`;

const StSearchBtn = styled.button`
  vertical-align: middle;
`;

const StInputLine = styled.div`
  width: 1045px;
  height: 35px;
  margin-top: 62px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--point);
`;

const StInput = styled.input`
  width: 1000px;
  height: 35px;
  background-color: transparent;
  /* border-radius: 5px; */
  /* border: 1px solid var(--point); */
`;