   import React from "react";
   import { useState } from "react";
   import styled from "styled-components";
   import axios from "axios";

   import BookSearch from "../BookSearch/BookSearch";
   import Book from "../BookSearch/Book";

   const PopupBookSearch = (props) => {
   // 검색어를 관리할 State
   const [searchValue, setSearchValue] = useState('');

   // 검색된 책 목록을 관리할 State
   const [searchBookList, setSearchBookList] = useState([]);
 
   // 검색어 입력시 실행될 함수
   const getSearchValue = (value) => { 
     setSearchValue(value);
     axios.get(`https://dapi.kakao.com/v3/search/book?target=title&size=20&query=${value}`, {
       headers: {
         Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_RESTAPI_KEY}`
       }
     })
       .then((res) => {
         setSearchBookList(res.data.documents);
         console.log(res.data.documents)
       })
       .catch((err) => console.error(err));
   };
 

  return (
    <React.Fragment>
                  {/* 검색창 컨테이너 */}
                  
                  <button style={{marginLeft:"465px", fontSize:"25px"}} type='button' onClick={() => {props.onClose()}} className='postCode_btn'>x</button>
                
                  <SearchContainer>
        
        <BookSearch getSearchValue={getSearchValue}  />
      </SearchContainer>
      {/* 검색 결과 컨테이너 */}
      <ResultContainer>
        {searchBookList.map((book, index) => (
            <Book key={index} imgURL={book.thumbnail} name={book.title} price={book.price} writer={book.authors.join(', ')} publisher={book.publisher} salePrice={book.sale_price} desc={book.contents} />
        ))}
      </ResultContainer>
    </React.Fragment>
  )
}
  export default PopupBookSearch;

  const SearchContainer = styled.div`
    width: 478px;
    margin-bottom: 10px;
`;

const ResultContainer = styled.div`
  display: block;
  position: absolute;
  background-color: white;
  width: 478px;
  height: 600px;
  border: 1px solid black;
  overflow: scroll;

`;