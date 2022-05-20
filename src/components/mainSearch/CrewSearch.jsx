import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { mainApi } from "../../api/mainApi";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { searchActions } from "../../redux/modules/search";
import { mainActions } from "../../redux/modules/main";

const CrewSearch = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SearchBar getSearchCrew={mainActions.getSearchCrew}></SearchBar>
    </React.Fragment>
  );
};

export default CrewSearch;
