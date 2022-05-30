import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { scrollbar } from "../themes/scrollbar";

const GlobalStyles = createGlobalStyle`
	${reset};
    :root {
		/* color */
    --main : #EDE1D3;
    --point: #815854;
		--fontColor: #282224;
    --black: #333333;
    --line: #eaeaea;
		--white : #ffffff;
		--notice : #A0001A;
		--gray : #989696;
  };
  * {
		margin:0;
		padding: 0;
		${scrollbar};
		box-sizing : border-box;
	}
	html {
		margin : 0;
		padding: 0;
		box-sizing: border-box;
		font-size:62.5%;
		height: 100%;
	}
	body{
		position: relative;
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans KR',sans-serif;
		height: 100%;
	}
	#root {
		height: 100%;
	}
	a { 
		color: var(--black);
		text-decoration:none;
	}
	input,
	textarea,
	button {
    font-family: 'Noto Sans KR',sans-serif;
		color: var(--black);
		border: none;
		outline: none;
	}
	button {
		padding: 0;
		background-color: transparent;
		cursor: pointer;
	}
`;

export default GlobalStyles;
