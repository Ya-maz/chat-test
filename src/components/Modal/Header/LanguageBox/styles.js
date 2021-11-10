import styled from "styled-components";
import { Container } from "./../../../UI/Button";

export const LanguageContainer = styled(Container)`
  position: relative;
`;

export const List = styled.ul`
  display: ${props => props.open? "block" : "none"};
  position: absolute;
  top: 30px;
  margin: 0;
  padding: 0;
  background-color: trasparent;
  border: 1px solid grey;
  border-radius: 2pt;
  &:hover {
    box-shadow: 0px 1px 5px  black;
    border: 
  }
`;

export const ListItemStyle = styled.li`
  display: flex;
  list-style-type: none;
  &:hover {
    background-color: trasparent;
  };
`;

export const LinkStyle = styled.div`
  color: #fff;
  outline: none;
  cursor:pointer;
  padding: 0 5px 0 0;
  &:visited {
    color: brown;
  }
  &:hover {
    color:chartreuse;
  }
  &:active {
    color:chocolate;
  }
`;