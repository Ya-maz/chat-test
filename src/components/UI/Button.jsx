import React from "react";
import styled from "styled-components";
import Arrow from "./../../assets/Vector_arrow.svg";

export const Container = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'inline-block')};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

const Box = styled.button`
display: flex;
background: trasparent;
color: #ACACAC;
font-size: 0.5rem;
background: url(Arrow);
margin: ${(props) => props.margin || '0'};
padding: ${(props) => props.padding || '0'};
cursor: pointer;
border: none;
outline: none;
`;
export const Button = (props) => {
  return (
    <Box
      margin={props.margin}
      padding={props.padding}
      onClick={props.onClick}>{props.children}</Box>
  );
};
