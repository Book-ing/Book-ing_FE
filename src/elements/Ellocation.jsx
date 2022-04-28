import styled from "@emotion/styled";
import React from "react";

const Ellocation = ({children}) => {
    return (
        <Box>{children}</Box>
    );
};

const Box = styled.div`
    text-align : center;
    align-items : center;
    color : #815854;
    width: 96px;
    height: 30px;
    border: 1px solid #815854;
    border-radius: 6px;
`

export default Ellocation;