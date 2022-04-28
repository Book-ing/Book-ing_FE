import React from "react";
import styled from 'styled-components';

const Elimage = (props) => {
  const {shape, src, width, minWidth, height, minHeight, br} = props;

    const outStyles = {
        width: width,
        height: height,
        minWidth: minWidth,
        minHeigth: minHeight,
    }

    const inStyles = {
        src: src,
        br: br,
        //border-raidus
    }

    if(shape === "profile"){
    return (
            <ProfileOutter {...outStyles}>
                <ProfileInner {...inStyles}></ProfileInner>
            </ProfileOutter>
        )
    }

    if(shape === "bookImg"){
        return (
            <BookImgOutter {...outStyles}>
                <BookImgInner {...inStyles}></BookImgInner>
            </BookImgOutter>
        )
    }

    if(shape === "cardImg"){
        return (
            <CardImgOutter {...outStyles}>
                <CardImgInner {...inStyles}></CardImgInner>
            </CardImgOutter>
        )
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

Elimage.defaultProps = {
  shape: "profile",
  src: "https://image.yes24.com/goods/73031896/XL",
  // https://img.apti.co.kr/aptHome/images/sub/album_noimg.gif (이미지 없음에 대한 이미지)
  size: 36,
};


const ProfileOutter = styled.div`
    ${(props) => (props.width ? `width: ${props.width}` : "width:100%")}; 
    ${(props) => (props.minWidth ? `min-width: ${props.minWidth}` : "min-width:190px")};
    ${(props) => (props.height ? `height: ${props.height}` : "height:100%")};
    ${(props) => (props.minHeight ? `min-height: ${props.minHeight}` : "min-height:190px")};
`
const ProfileInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    background-position: center;
    border: solid 1px black;
    ${(props) => (props.br ? `border-radius: ${props.br}` : "border-radius:24px")};
`


const BookImgOutter = styled.div`
    ${(props) => (props.width ? `width: ${props.width}` : "width:100%")};
    ${(props) => (props.minWidth ? `min-width: ${props.minWidth}` : "min-width:150px")};
    ${(props) => (props.height ? `height: ${props.height}` : "height:100%")};
    ${(props) => (props.minHeight ? `min-height: ${props.minHeight}` : "min-height:220px")};
`
const BookImgInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    border: 3px solid black;
    ${(props) => (props.br ? `border-radius: ${props.br}` : "")};
`


const CardImgOutter = styled.div`
    ${(props) => (props.width ? `width: ${props.width}` : "width:100%")};
    ${(props) => (props.minWidth ? `min-width: ${props.minWidth}` : "min-width:193px")};
    ${(props) => (props.height ? `height: ${props.height}` : "height:100%")};
    ${(props) => (props.minHeight ? `min-height: ${props.minHeight}` : "min-height:193px")};
`

const CardImgInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    background-position: center;
    ${(props) => (props.br ? `border-radius: ${props.br}` : "border-radius:24px")};
`;

export default Elimage;
