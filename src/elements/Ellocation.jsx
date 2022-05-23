import styled from "@emotion/styled";
import React from "react";

const Ellocation = ({children, ...rest}) => {
    return (
        <Box {...rest}>{children}</Box>
    );
};

const Box = styled.div`
    text-align : center;
    align-items : center;
    color : var(--point);
    /* width: 96px;
    height: 30px; */
    border: 1px solid var(--point);
    border-radius: 6px;
    background-color: var(--white);
    width: ${(props) =>
    props.width ? `${props.width}` : "96px"};
    height: ${(props) =>
    props.height ? `${props.height}` : "30px"};
`

export default Ellocation;