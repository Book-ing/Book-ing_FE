import styled from "@emotion/styled";
import React from "react";
import flex from "../themes/flex";

const Ellocation = ({children, ...rest}) => {
    return (
        <Box {...rest}>{children}</Box>
    );
};

const Box = styled.div`
    ${flex("center", "center", false)}
    padding-bottom: 1px;
    color : var(--point);
    border: 1px solid var(--point);
    border-radius: 6px;
    background-color: var(--white);
    width: ${(props) =>
    props.width ? `${props.width}` : "96px"};
    height: ${(props) =>
    props.height ? `${props.height}` : "30px"};
`

export default Ellocation;