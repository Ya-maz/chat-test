import styled from "styled-components";
import { Container } from "./../../../UI/Button";

export const Box = styled(Container)`
  overflow-y: scroll;
  scroll-width: none;
  scrollbar-gutter: stable;


  ::-webkit-scrollbar {
    width: 8px;
    transition: scrollbar-color 1s ease-out;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0);
    &:hover {
      background-color: rgba(255, 255, 255, .2);
    }
  }
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
    &:hover {
      background-color: rgba(0, 0, 0, .5);
    }
  }
`;

export const Message = styled(Container)`
  background-color: #fff;
  max-width:65%;
  margin: 0 10px 10px 10px;
  padding: 5px 10px 10px 10px;
  border-radius: 15px 15px 15px 1%; 
`;

export const Nickname = styled(Container)`
  padding: 0 4px;
  color: grey;
`;

export const Time = styled(Container)`
 color: rgba(255, 255, 255, .4);
 font-size: 0.9rem;
`;