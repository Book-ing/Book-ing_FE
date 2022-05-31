import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { postBook } from "../../redux/modules/book";

const Book = ({
  imgURL = "",
  name = "도서명",
  desc = "도서 설명",
  writer = "작가명",
  publisher = "출판사",
  price = "정가",
  salePrice = "판매가",
  popupClose,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <BookItem>
        <img
          style={{ width: "140px", height: "180px" }}
          src={imgURL}
          alt="도서 이미지"
        />
        <BookInfo>
          <BookName>{name}</BookName>
          <BookDesc>{desc}...</BookDesc>
          <span>
            지은이: {writer} | 출판사: {publisher}
          </span>
          <div> 가격:{price}원</div>
          <StBtn
            onClick={() => {
              dispatch(postBook({ imgURL, name, desc, writer, publisher }));
              popupClose();
            }}
          >
            선택하기
          </StBtn>
        </BookInfo>
      </BookItem>
      <hr style={{ border: "1px solid #eeeeee" }} />
    </>
  );
};

export default Book;

const BookItem = styled.li`
  list-style: none;
  display: flex;
  margin: 5px 0;
`;

const BookInfo = styled.div`
  margin-left: 15px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
`;

const BookName = styled.span`
  margin-top: -13px;
  font-size: 18px;
  font-weight: bold;
`;

const BookDesc = styled.p`
  height: 75px;
  font-size: 14px;
  line-height: 25px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StBtn = styled.button`
  width: 100px;
  border: 1px solid var(--point);
  border-radius: 5px;
  margin-top: 5px;
  &:hover {
    color: var(--white);
    background-color: var(--point);
  }
`;
