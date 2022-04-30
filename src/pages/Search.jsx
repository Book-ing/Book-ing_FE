import styled from "@emotion/styled";
import React from "react";
import Header from "../components/Header";
import ElcategoryCheckbox from "../elements/ElcategoryCheckbox"

const Search = () => {
  return (
    <React.Fragment>
      <Header />
        <StCategoryBox>
          <ElcategoryCheckbox />
        </StCategoryBox>
    </React.Fragment>
  );
};

export default Search;

const StCategoryBox = styled.div`
  width: 1280px;
  margin: auto;
`