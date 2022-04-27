import React from "react";
import styled from 'styled-components';

const Elimage = (props) => {
  const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "profile"){
    return (
            <ProfileOutter>
                <ProfileInner {...styles}></ProfileInner>
            </ProfileOutter>
        )
    }

    if(shape === "bookImg"){
        return (
            <BookImgOutter>
                <BookImgInner {...styles}></BookImgInner>
            </BookImgOutter>
        )
    }

    if(shape === "cardImg"){
        return (
            <CardImgOutter>
                <CardImgInner {...styles}></CardImgInner>
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
    width: 90%;
    min-width: 190px;
    height: 90%;
    min-height: 190px;
`
const ProfileInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    background-position: center;
    border-radius: 24px;
`


const BookImgOutter = styled.div`
    width: 100%;
    min-width: 207px;
    height: 100%;
    min-height: 299px;
`
const BookImgInner = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    background-position: center;
    border-radius: 24px;
`


const CardImgOutter = styled.div`
    width: 100%;
    min-width: 206px;
    height: 100%;
    min-height: 179px;
`

const CardImgInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover; 
    background-position: center;
    border-radius: 24px;
`;

export default Elimage;
