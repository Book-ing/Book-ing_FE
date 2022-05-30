import { css } from "styled-components";

// GlobalStyles 에서 font-size를 62.5% 로 설정하였으므로 글로벌폰트사이즈는 10px 이다.
// 따라서 1rem 은 10px, 2rem은 20px 형식으로 생각하면 된다.
// 16px, 24px 등을 rem 으로 나타내거나 밑의 변수 값들을 수정하고 싶을 때에는,
// 1.6rem, 2.4rem 등으로 나타낼 수 있다.
// 또한, line-height는 글자의 세로 자간 이다.

export const head_1 = css`
  font-size: 5rem;
  line-height: 6rem;
`;
export const head_1_bold = css`
  font-size: 5rem;
  line-height: 6rem;
  font-weight: bold !important;
`;

export const head_2 = css`
  font-size: 4rem;
  line-height: 5rem;
  /* letter-spacing: -0.05rem; */
`;
export const head_2_bold = css`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: bold !important;
  /* letter-spacing: -0.05rem; */
`;

export const head_3 = css`
  font-size: 3.6rem;
  line-height: 4.4rem;
`;
export const head_3_bold = css`
  font-size: 3.6rem;
  line-height: 4.4rem;
  font-weight: bold !important;
`;

export const head_4 = css`
  font-size: 3.4rem;
  line-height: 4rem;
  letter-spacing: 0.05rem;
`;
export const head_4_bold = css`
  font-size: 3.4rem;
  line-height: 4rem;
  letter-spacing: 0.05rem;
  font-weight: bold !important;
`;

export const head_5 = css`
  font-size: 3.2rem;
  line-height: 3.4rem;
`;
export const head_5_bold = css`
  font-size: 3.2rem;
  line-height: 3.4rem;
  font-weight: bold !important;
`;

export const head_6 = css`
  font-size: 3rem;
  line-height: 3.2rem;
`;
export const head_6_bold = css`
  font-size: 3rem;
  line-height: 3.2rem;
  font-weight: bold !important;
`;

export const head_7 = css`
  font-size: 2.8rem;
  line-height: 2.8rem;
`;
export const head_7_bold = css`
  font-size: 2.8rem;
  line-height: 2.8rem;
  font-weight: bold !important;
`;

export const head_8 = css`
  font-size: 2.5rem;
  line-height: 2.5rem;
`;

export const head_8_bold = css`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`;

export const sub_1 = css`
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
`;

export const sub_1_bold = css`
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.02rem;
  font-weight: bold !important;
`;

export const sub_2 = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
`;
export const sub_2_bold = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  font-weight: bold !important;
`;

export const body_1 = css`
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.02rem;
`;

export const body_1_bold = css`
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.02rem;
  font-weight: bold !important;
`;

export const body_2 = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: 700;
`;

export const body_2_bold = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: 700;
  font-weight: bold !important;
`;

export const body_3 = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: -0.02rem;
`;

export const body_3_bold = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: -0.02rem;
  font-weight: bold !important;
`;

export const body_4 = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;
export const body_4_bold = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: bold !important;
`;

export const body_5 = css`
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: -0.02rem;
`;

export const button = css`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const button_bold = css`
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 700 !important;
`;
