/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
import styled, { css } from "styled-components";

//external variable
//use the css to get the syntax highlighting
// and also css function
// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  //get access to the props using a call back function
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `} /* font-size: ${10 > 0 ? "30px" : "5px"}; */

${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `} /* font-size: ${10 > 0 ? "30px" : "5px"}; */
`;

export default Heading;
