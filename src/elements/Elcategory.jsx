import React from "react";
import styled from "styled-components";

import {
    novel,
    poem,
    essay,
    economy,
    selfDev,
    humanities,
    philosophy,
    science,
    society,
    art,
    popularCulture,
    technology,
    itComputer,
    life,
    health,
    construction,
    literature,
    language,
    edu,
    sports,
    job,
    exam,
    history
} from "../themes/categoryStyle"

const Elcategory = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
  };

  const Wrapper = styled.div`
  ${({ shape }) => {
    switch (shape) {
        case "소설":
            return `${novel}`;
        case "시":
            return `${poem}`;
        case "에세이":
            return `${essay}`;
        case "경제/경영":
            return `${economy}`;
        case "자기계발":
            return `${selfDev}`;
        case "인문":
            return `${humanities}`;
        case "철학":
            return `${philosophy}`;
        case "과학":
            return `${science}`;
        case "사회":
            return `${society}`; 
        case "예술":
            return `${art}`;
        case "대중문화":
            return `${popularCulture}`;
        case "기술/공학":
            return `${technology}`;
        case "IT/컴퓨터":
            return `${itComputer}`;
        case "생활/요리":
            return `${life}`;
        case "건강":
            return `${health}`;
        case "건축":
            return `${construction}`;
        case "문학":
            return `${literature}`;
        case "외국어":
            return `${language}`;
        case "교육":
            return `${edu}`;
        case "스포츠":
            return `${sports}`;
        case "취업":
            return `${job}`;
        case "수험":
            return `${exam}`;
        case "역사":
            return `${history}`;
        default:
            return;
    }
  }}
  color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--fontColor)`};
  width: ${(props) =>
    props.width ? `${props.width}` : ""};
  height: ${(props) =>
    props.height ? `${props.height}` : ""};
  font-weight: ${(props) =>
    props.fontWeight ? `${props.fontWeight}` : ""};
`;


export default Elcategory;