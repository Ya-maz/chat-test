import styled, { css } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const StylizedTab = styled.button`
  color: #23B838;
  width: 100%;
  padding: 10px 10px;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #fff;
      animation: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
    ${(p) => p.value === 3  &&
    css`
    background: linear-gradient(90deg, rgba(35,184,56,0.9) 0%, rgba(0,0,0,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #fff;
      display: table;
    `}
    ${(p) => p.value === 3  && p.active && 
      css`
      background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(0,0,0,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #fff;
        display: table;
      `}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 1rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  margin: 0 10px;
  height: 4px;
  background-color: #23B838;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;
