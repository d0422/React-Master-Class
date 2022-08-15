import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Routers from "./routes/Routers";
import { ThemeProvider } from "styled-components";
import { theme, darktheme } from "./theme";
import { useState } from "react";
const Style = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
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
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  font-family: 'Source Sans Pro', sans-serif;
}
ol, ul {
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
a{
  text-decoration: none;
  color:inherit;
}
*{
  box-sizing: border-box;

}
`;
const Btn = styled.div`
  font-size: 20px;
  border-radius: 25px;
  margin-top: 20px;
  margin-left: 30px;
  border-style: solid;
  border-color: white;
  width: 100px;
  height: 50px;
`;
function App() {
  const [isdark, setDark] = useState(true);
  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isdark ? theme : darktheme}>
        <Style />
        <Routers toggleDark={toggleDark} isDark={isdark}></Routers>
      </ThemeProvider>
    </>
  );
}
export default App;
