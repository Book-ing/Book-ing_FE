import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ElcategoryCheckbox from "../elements/ElcategoryCheckbox";
import { Elchip, Eltext } from "../elements";
import Elcategory from "../elements/Elcategory";
import CrewList from "../components/CrewList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/modules/search";
import SearchIcon from "@mui/icons-material/Search";
import { searchActions } from "../redux/modules/search";


const Search = () => {
  const dispatch = useDispatch();

  const info = useSelector((state)=> state.search.result);
  
  console.log(info)

  useEffect = () => {

  }

  const [searchInfo, setSearchInfo] = useState({
    title: "",
    category: "",
    region: "",
  });

  const onChangeInputHandler = (e) => {
    const { value, name } = e.target;

    setSearchInfo({
      ...searchInfo,
      [name]: value,
      
    });
  };

  const ProduceValue = (e) => {
    e.preventDefault();
    
    const value = {
      word: searchInfo.title,
      cate: (searchInfo.category === 0) ? Number(searchInfo.category) : "",
      loc: searchInfo.region, 
    }
    console.log(value);
    dispatch(searchActions.getSearchDB(value));
  };

  const SelectList = [
    { name:"지역을 선택해주세요", code:""},
    { name:"서울", code: 101 },
    { name:"부산", code: 102 },
    { name:"대구", code: 103 },
    { name:"인천", code: 104 },
    { name:"광주", code: 105 },
    { name:"대전", code: 106 },
    { name:"울산", code: 107 },
    { name:"세종", code: 108 },
    { name:"경기", code: 109 },
    { name:"강원", code: 110 },
    { name:"충북", code: 111 },
    { name:"충남", code: 112 },
    { name:"전북", code: 113 },
    { name:"전남", code: 114 },
    { name:"경북", code: 115 },
    { name:"경남", code: 116 },
    { name:"제주", code: 117 },
  ];
  if (info === ""
  )
    return <></>;

  return (
    <React.Fragment>
      <TagTop>
       <form onSubmit={ProduceValue}>
        <StSearchBox>
          <StSelect name="region" onChange={onChangeInputHandler}>
            {SelectList.map((cur) => (
              <option value={cur.code} key={cur.code}>
                {cur.name}
              </option>
            ))}
          </StSelect>
          <StInputLine>
          <StInput
            name="title"
            placeholder="원하는 모임을 검색해주세요."
            onChange={onChangeInputHandler}
          />
          <StSearchBtn >
          {/* <Link to="/search"> */}
            <SearchIcon fontSize="large" />
          {/* </Link> */}
          {/* <SearchIcon fontSize="large" /> */}
        </StSearchBtn>
        </StInputLine>
        </StSearchBox>
        <StCategoryBox>
          <StInputName type="sub_2_bold">Category</StInputName>
          <ElcategoryCheckbox onChange={onChangeInputHandler}/>
        </StCategoryBox>
        </form>
      </TagTop>
      <TagBottom>
        {info.map((p, idx) => {
          return (
        <CrewList key={idx} {...p}/>
          );
        })}
      </TagBottom>
    </React.Fragment>
  );
};

export default Search;

const TagTop = styled.div`
  margin: auto;
  width: 1440px;
`;

const StSearchBox = styled.div`
  display: flex;
  width: 1280px;
  margin-left: 185px;
  gap: 45px;
`;

const StCategoryBox = styled.div`
  width: 1280px;
  margin-left: 185px;
  margin-bottom: 30px;
`;

const StInput = styled.input`
  width: 750px;
  height: 30px;
  background-color: transparent;
  /* border-radius: 5px;
  border: 1px solid var(--point); */
`;

const StSelect = styled.select`
  width: 230px;
  height: 30px;
  border: 1px solid var(--point);
  border-radius: 3px;
`;

const StInputName = styled(Eltext)`
  margin-top: 30px;
`;

const TagBottom = styled.div`
  width: 1440px;
  height: 1240px;
  overflow: scroll;
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StInputLine = styled.div`
  width: 800px;
  height: 35px;
  /* margin-top: 62px; */
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--point);
`;


const StSearchBtn = styled.button`
  vertical-align: middle;
`;