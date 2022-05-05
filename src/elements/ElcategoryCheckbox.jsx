import React from 'react';
import styled from 'styled-components';
import flex from "../themes/flex";

const ElcategoryRadio = () => {

    const Categorys = [
        { name: '소설', hex: '#594157' },
        { name: '시', hex: '#726DA8' },
        { name: '에세이', hex: '#DD5C72' },
        { name: '경제/경영', hex: '#69B5C7' },
        { name: '자기계발', hex: '#665780' },
        { name: '인문', hex: '#8FAFD0' },
        { name: '철학', hex: '#94B029' },
        { name: '과학', hex: '#AB4858' },
        { name: '사회', hex: '#AC8693' },
        { name: '예술', hex: '#949885' },
        { name: '대중문화', hex: '#84B3A7' },
        { name: '기술/공학', hex: '#AEAEAE' },
        { name: 'IT/컴퓨터', hex: '#567A56' },
        { name: '생활/요리', hex: '#5D9E90' },
        { name: '건강', hex: '#CC8449' },
        { name: '건축', hex: '#F14048' },
        { name: '문학', hex: '#6197ED' },
        { name: '외국어', hex: '#52796F' },
        { name: '교육', hex: '#7A6E2C' },
        { name: '스포츠', hex: '#552248' },
        { name: '취업', hex: '#003566' },
        { name: '수험', hex: '#2C1D25' },
        { name: '역사', hex: '#FF6445' },
      ];

    return (
        <React.Fragment>
          <RadioCategoryWrap>
            {Categorys.map((category) => (
              <div key={category.name}>
                <StInputRadio
                  id={category.name}
                  type="checkbox"
                  name="category-selector"
                  value={category.name}
                  color={category.hex}
                />
                <StRadioLabel htmlFor={category.name} color={category.hex}>{category.name}</StRadioLabel>
              </div>
            ))}
          </RadioCategoryWrap>
        </React.Fragment>
      );
    }

export default ElcategoryRadio;

const RadioCategoryWrap = styled.div`
    display: inline-block;
    width: 900px;
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

const StInputRadio = styled.input`
    
    display: none;
    &:checked + ${StRadioLabel} {
        background-color: ${(props) => props.color};
        color: white;
    }
    `;
