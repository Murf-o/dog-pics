import styled from "styled-components";

export const StyledMyButton = styled.button `
  border-radius: 30px;
  border: 2px solid black;
  background-color: red;
  font-family: sans-serif;
  margin: 100px;
  width: 200px;
  height: 100px;
  cursor: pointer;
  display: inline-block;
  &:active {
    background-color: blue;
  }
`