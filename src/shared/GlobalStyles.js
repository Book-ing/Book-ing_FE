import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { scrollbar } from "../themes/scrollbar";

const GlobalStyles = createGlobalStyle`
	${reset};
    :root {
		/* color */
    --main : #F9EBDE;
    --point: #815854;
		--fontColor: #282224;
    --black: #333333;
    --line: #eaeaea;
		--white : #ffffff;
		--notice : #ff7776;
  };
  * {
		${scrollbar};
		box-sizing : border-box;
	}
	html {
		margin : 0;
		padding: 0;
		box-sizing: border-box;
		/* font-size:62.5%; */
	}
	body{
		position: relative;
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans KR',sans-serif;
		/* font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  */
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
