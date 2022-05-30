import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import flex from "../themes/flex";
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
import { actionCreators as userActions } from "../redux/modules/crew";
import noSearch from "../assets/search/noSearch.png"


const Search = () => {
  const dispatch = useDispatch();

  const info = useSelector((state)=> state.search.result);
  const ab = useSelector((state)=>state.search)
  // console.log(ab)
  // console.log(info.length)
  
  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(userActions.loginCheckDB());
  // }, []);
   // ==================== 민우님이 요청한 loginCheckDB ========================

  const [searchInfo, setSearchInfo] = useState({
    title: "",
    category: "",
    region: "",
  });

  const [category, setCategory] = useState("")

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
      cate: (JSON.stringify(category) === "[]" ? "" : category.toString()
      ),
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
  if (ab === ""
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

            <SearchIcon fontSize="large" />

        </StSearchBtn>
        </StInputLine>
        </StSearchBox>
        <StCategoryBox>
          <StInputName type="sub_2_bold">Category</StInputName>

          <ElcategoryCheckbox onChange={setCategory}/>

        </StCategoryBox>
        </form>
      </TagTop>
      {info.length ? 
        <TagBottom>
        {info.map((p, idx) => {
          return (
        <CrewList key={idx} {...p}/>
          );
        })}
        </TagBottom>
      :
      <TagBottom>
        <div style={{marginLeft: "500px", width:"500px", height:"500px", marginTop: "100px", marginBottom:"100px", backgroundImage: `url(${noSearch})`, backgroundSize: "cover"}}>
        </div>
      </TagBottom>
      }
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
  min-height: 800px;
  max-height: 1240px;
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

const RadioCategoryWrap = styled.div`
    display: inline-block;
    width: 900px;
    height: 135px;
    margin-top: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const StRadioLabel = styled.label`
    ${flex("center", "center", false)}
    float: left;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.015rem;
    color: black;
    width: 96px;
    height: 30px;
    border: 1px solid ${(props) => props.color};
    box-sizing: border-box;
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 10px;
`;

const StInputCheck = styled.input`
    
    display: none;
    &:checked + ${StRadioLabel} {
        background-color: ${(props) => props.color};
        color: white;
    }
    `;
