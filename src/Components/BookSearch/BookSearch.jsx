import React, { useState } from 'react';

import styled from 'styled-components'

// App.js로부터 searchValue(상태값)와 getSearchValue 함수를 전달받음
const Search = ({ getSearchValue, getSortingOption }) => {
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
          <input style={{border:"1px solid black"}} value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} />
          <button onClick={sendSearchValue}>검색</button>
      </SearchWindowContainer>
  );
};

export default Search;

const SearchWindowContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    padding: 10px 5px;
    > button {
        cursor: pointer;
        margin-left: 5px;
    }
`;