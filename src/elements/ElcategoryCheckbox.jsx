import React, { useState } from 'react';
import styled from 'styled-components';
import flex from "../themes/flex";

const ElcategoryCheckbox = (props) => {

    const Categorys = [
        { name: '소설', hex: '#594157', code:201},
        { name: '시', hex: '#726DA8', code:202},
        { name: '에세이', hex: '#DD5C72', code:203},
        { name: '경제/경영', hex: '#69B5C7', code:204 },
        { name: '자기계발', hex: '#665780', code:205 },
        { name: '인문', hex: '#8FAFD0', code:206 },
        { name: '철학', hex: '#94B029', code:207 },
        { name: '과학', hex: '#AB4858', code:208 },
        { name: '사회', hex: '#AC8693', code:209 },
        { name: '예술', hex: '#949885', code:210 },
        { name: '대중문화', hex: '#84B3A7', code:211 },
        { name: '기술/공학', hex: '#AEAEAE', code:212 },
        { name: 'IT/컴퓨터', hex: '#567A56', code:213 },
        { name: '생활/요리', hex: '#5D9E90', code:214 },
        { name: '건강', hex: '#CC8449', code:215 },
        { name: '건축', hex: '#F14048', code:216 },
        { name: '문학', hex: '#6197ED', code:217 },
        { name: '외국어', hex: '#52796F', code:218 },
        { name: '교육', hex: '#7A6E2C', code:219 },
        { name: '스포츠', hex: '#552248', code:220 },
        { name: '취업', hex: '#003566', code:221 },
        { name: '수험', hex: '#2C1D25', code:222 },
        { name: '역사', hex: '#FF6445', code:223 },
      ];

<<<<<<< HEAD
      
        const[checkedList, setCheckedList] =useState([]);

        const onCheckedElement = (checked, item) => {
          if (checked) {
            setCheckedList([...checkedList, item])
            
          } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
          };
        };


        props.onChange(checkedList);
=======
      // function ProdBasicInfo() {
      //   const[checkedList, setCheckedList] =useState([]);

      //   const onCheckedElement = (checked, item) => {
      //     if (checked) {
      //       setCheckedList([...checkedList, item]);
      //     } else if (!checked) {
      //       setCheckedList(checkedList.filter(el => el !== item));
      //     };
      //   }
      
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
    return (
        <React.Fragment>
          <RadioCategoryWrap>
            {Categorys.map((item) => (
              <div key={item.name}>
                <StInputCheck
                  id={item.name}
<<<<<<< HEAD
                  type="checkbox"
                  name="category"
                  value={item.code}
                  color={item.hex}
                  onChange={e => {
                    onCheckedElement(e.target.checked, e.target.value)}}
=======
                  type="radio"
                  name="category"
                  value={item.code}
                  color={item.hex}
                  onChange={props.onChange}
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
                />
                <StRadioLabel htmlFor={item.name} color={item.hex}>{item.name}</StRadioLabel>
              </div>
            ))}
          </RadioCategoryWrap>
        </React.Fragment>
      );
    }
  
<<<<<<< HEAD
  
=======
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)


export default ElcategoryCheckbox;

const RadioCategoryWrap = styled.div`
    display: inline-block;
    width: 1020px;
    height: 135px;
    margin-top: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const StRadioLabel = styled.label`
    ${flex("center", "center", false)}
    float: left;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.015rem;
    color: black;
    width: 96px;
    height: 30px;
    border: 1px solid ${(props) => props.color};
    box-sizing: border-box;
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 10px;
`;

const StInputCheck = styled.input`
    
    display: none;
    &:checked + ${StRadioLabel} {
        background-color: ${(props) => props.color};
        color: white;
    }
    `;
