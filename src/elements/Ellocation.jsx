import styled from "@emotion/styled";
import React from "react";
import flex from "../themes/flex";

const Ellocation = ({children, ...rest}) => {
    return (
        <Box {...rest}>{children}</Box>
    );
};

const Box = styled.div`
<<<<<<< HEAD
    ${flex("center", "center", false)}
    padding-bottom: 1px;
    color : var(--point);
=======
    text-align : center;
    align-items : center;
    color : var(--point);
    /* width: 96px;
    height: 30px; */
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
    border: 1px solid var(--point);
    border-radius: 6px;
    background-color: var(--white);
    width: ${(props) =>
    props.width ? `${props.width}` : "96px"};
    height: ${(props) =>
    props.height ? `${props.height}` : "30px"};
`

export default Ellocation;