import styled from "styled-components";
import { Container } from "./../../UI/Button";

export const Box = styled(Container)`
  justify-content: space-between;
  align-items: center;
  position:relative;
  margin: 0;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, .6);
  border-bottom-left-radius:inherit;
  border-bottom-right-radius:inherit;
`;

export const Form = styled.textarea`
  width: 85%;
  background:rgba(0, 0, 0, 0);
  border: none;
  padding: 10px 10px 0 10px;
  color: white;
  resize: none;
  font-family: 'Rubik', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  outline: none;
`;
