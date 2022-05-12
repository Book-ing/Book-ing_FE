import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { mainApi } from "../../api/mainApi";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { searchActions } from "../../redux/modules/search";

const CrewSearch = (props) => {
 const dispatch = useDispatch();
// 검색어를 관리할 State
const [searchValue, setSearchValue] = useState('');

// 검색된 책 목록을 관리할 State
const [searchBookList, setSearchBookList] = useState([]);

// 검색어 입력시 실행될 함수
const getSearchCrew = (value) => { 
  setSearchValue(value);
  console.log(value)
  mainApi
  .searching(value)
  .then((res) => {
     console.log(res.data.data.searchResult)
     //  setSearchBookList(res.data.documents);
    //  window.location.replace("http://localhost:3000/search")
     dispatch(searchActions.getSearch(res.data.data.searchResult))
    })
    .catch((err) => console.error(err));
};


return (
  <React.Fragment>
    <SearchBar getSearchCrew={getSearchCrew}></SearchBar>
  </React.Fragment>
  )
};

export default CrewSearch