import styled from "@emotion/styled";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ElcategoryCheckbox from "../elements/ElcategoryCheckbox";
import { Elchip, Eltext } from "../elements";
import Elcategory from "../elements/Elcategory";

const Search = () => {
  const SelectList = [
    "지역을 선택해주세요",
    "서울",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];

  return (
    <React.Fragment>
      <Header />
      <TagTop>
      <StSearchBox>
        <StSelect name="region">
          {SelectList.map((cur) => (
            <option value={cur} key={cur}>
              {cur}
            </option>
          ))}
        </StSelect>
        <StInput
              name="title"
              placeholder="원하는 모임을 검색해주세요."
              // onChange={onChangeInputHandler}
            />
      </StSearchBox>
      <StCategoryBox>
      <StInputName type="sub_2_bold">Category</StInputName>
        <ElcategoryCheckbox />
      </StCategoryBox>
      </TagTop>
      <TagBottom>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList> 
        
        <StCrewList>
          <StCrewInfo>
            <StTextBox>
            <Eltext type="sub_2_bold">
              <div>[서울] 햄찌친구들 모여라~! (299/300)</div>
            </Eltext>
            <Eltext type="sub_2">
              <div>모임소개글 Info가 적히게 됩니다.</div>
            </Eltext>
            </StTextBox>
            <Elcategory shape="sports">
              <Eltext type="sub_2" color="white">
                스포츠
              </Eltext>
              </Elcategory>
          </StCrewInfo>
          <StButton>
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                보러가기
              </Eltext>
            </Elchip>
          </StButton>
        </StCrewList>

      </TagBottom>
      <Footer />
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
  border-radius: 5px;
  border: 1px solid var(--point);
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
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StCrewList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 99px;
  width: 1267px;
  height: 85px;
  background-color: #FBF9F9;
  margin-bottom: 15px;
  /* border: 1px solid black; */
`;

const StCrewInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  width: 400px;
  margin-left: 150px;
  /* border: 1px solid black; */
`;

const StTextBox = styled.div`
  width: 275px;
  /* border: 1px solid black; */
`;

const StButton = styled.div`
  padding-top: 20px;
  align-items: center;
  /* border: 1px solid black; */
`