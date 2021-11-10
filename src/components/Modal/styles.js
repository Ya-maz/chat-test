import styled from "styled-components";

export const ModalFlex = styled.div`
height: 100vh;
padding: 0;
margin: 0;
display: ${props =>props.open? "flex" : "none"};
align-items: end;
justify-content: left;
border-radius: 20%;
`;

export const FlexRow = styled.div`
margin: 20px;
transform: ${props => props.size === true? "scale(2) translate(25%, -30%);": "scale(1)"};
width: 360px;
height: 400px;
background-color: trasparent;
border-radius: 18px;
`;