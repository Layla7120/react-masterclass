import styled, { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Joan&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Joan&family=Noto+Sans+KR:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-weight: 300;
  font-family: 'Joan','Noto Sans KR', sans-serif;
  background-color: ${props => props.theme.bgColor};
  color:${props => props.theme.textColor};
  line-height: 1.2;
}
a{
  text-decoration: none;
  color:inherit;
}
`;

export const H1 = styled.h1`
  margin: 80px auto 20px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  text-shadow: 2px 2px 2px;
  border-bottom: solid;
`;

export const H2 = styled.h2`
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
`;
export const ToDoListDiv = styled.div`
  text-align: center;
  font-weight: 400;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.buttonColor};
  padding: auto 8px;
  border: 1px solid;
  margin-left: 9px;
  font-size: 13px;
`;

export const UlBox = styled.div`
  background-color: ${props => props.theme.boxColor};
  padding: 10px;
  margin: 15px auto;
  width: 300px;
`;

export const Select = styled.select`
  background: #f8efba;
  font-size: 15px;
  padding: 10px;
  margin: 15px auto;
`;

export const Input = styled.input`
  font-size: 15px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
