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
  ${({ type }) => {
    switch (type) {
        case "novel":
            return `${novel}`;
        case "poem":
            return `${poem}`;
        case "essay":
            return `${essay}`;
        case "economy":
            return `${economy}`;
        case "selfDev":
            return `${selfDev}`;
        case "humanities":
            return `${humanities}`;
        case "philosophy":
            return `${philosophy}`;
        case "science":
            return `${science}`;
        case "society":
            return `${society}`; 
        case "art":
            return `${art}`;
        case "popularCulture":
            return `${popularCulture}`;
        case "technology":
            return `${technology}`;
        case "itComputer":
            return `${itComputer}`;
        case "life":
            return `${life}`;
        case "health":
            return `${health}`;
        case "construction":
            return `${construction}`;
        case "literature":
            return `${literature}`;
        case "language":
            return `${language}`;
        case "edu":
            return `${edu}`;
        case "sports":
            return `${sports}`;
        case "job":
            return `${job}`;
        case "exam":
            return `${exam}`;
        case "history":
            return `${history}`;
        default:
            return;
    }
  }}
  /* color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--fontColor)`}; */
`;

export default Elcategory;