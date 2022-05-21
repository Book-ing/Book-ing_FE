import React, { useState } from 'react';

import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";

//  searchValue(상태값)와 함수를 전달받음
const BookSearch = ({ getSearchValue }) => {
  // 검색항목 관리 State
  const [searchValue, setSearchValue] = useState('');
  
  // 검색값 전달하기 위한 함수 선언
  const sendSearchValue = e => { 
      e.preventDefault();
      if (!e.currentTarget.value || e.currentTarget.value === '') getSearchValue(searchValue);
      else alert('검색어를 입력해주세요');
  }


  return (
      <SearchWindowContainer>
          <input style={{marginLeft:"20px",border:"1px solid var(--point)", width:"400px"}} value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} />

        <StSearchBtn onClick={sendSearchValue}>
<<<<<<< HEAD
            <SearchIcon sx={{ color: "var(--white)" }} fontSize="large" />
        </StSearchBtn>
          
=======

            <SearchIcon fontSize="large" />

        </StSearchBtn>
          {/* <button onClick={sendSearchValue}>검색</button> */}
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
      </SearchWindowContainer>
  );
};

export default BookSearch;

const SearchWindowContainer = styled.div`
    border: 1px solid var(--point);
    border-radius: 5px;
    width: 100%;
    padding: 10px 5px;
    > button {
        cursor: pointer;
        margin-left: 5px;
    }
`;

const StSearchBtn = styled.button`
    vertical-align: middle;
    color: var(--point);
`;