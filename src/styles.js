import styled from "styled-components";

const Span = styled.span`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #f0021e);
  }
  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #f0021e);
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #f0021e);
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #f0021e);
  }
`;

const Container = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  padding: 15px 30px;
  color: #f0021e;
  text-transform: uppercase;
  border:none;
  transform: translate(-50%, -50%);
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 24px;
  font-weight:900;
  overflow: hidden;
  transition: 0.2s;
  color: #4d232d;
  background: #f0021e;
  box-shadow: 0 0 10px #f0021e, 0 0 40px #f0021e, 0 0 80px #f0021e;
  &:hover {
    color: #4d232d;
    box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
    border-radius: 10px;
  }

//   &:hover {
//     ${Span}:nth-child(3){
//       right: 100%;
//       transition: 1s;
//       transition-delay: 0.5s;
//     }
//   }
//     &:hover {
//       ${Span}:nth-child(2){
//         top: 100%;
//         transition: 1s;
//         transition-delay: 0.25s;
//       }
//     }
//     &:hover {
//       ${Span}:nth-child(4){
//         bottom: 100%;
//         transition: 1s;
//         transition-delay: 0.75s;
//       }
//     }
`;



export function Neon(props) {
  return (
    <Container  onClick={props.onClick}>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      { props.children }
    </Container>
  )
}

const Containermd = styled(Container)`
  position: absolute;
  top: 60%;
  left: 50%;
  display: inline-block;
  padding: 7px 15px;
  color: #f0021e;
  text-transform: uppercase;
  border:none;
  transform: translate(-50%, -50%);
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight:600;
  overflow: hidden;
  transition: 0.2s;
  color: #224a28;
  background: #05e624;
  box-shadow: 0 0 10px #05e624, 0 0 40px #05e624, 0 0 80px #05e624;
  &:hover {
    color: #4d232d;
    box-shadow: 0 0 10px #33fe5b, 0 0 40px #33fe5b, 0 0 80px #33fe5b;
    border-radius: 10px;
  }
`;

export function Neonmd(props) {
  return (
    <Containermd  onClick={props.onClick}>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      { props.children }
    </Containermd>
  )
}


const Containersm = styled(Container)`
  position: absolute;
  top: 68%;
  left: 50%;
  display: inline-block;
  padding: 7px 7px;
  color: #f0021e;
  text-transform: uppercase;
  border:none;
  transform: translate(-50%, -50%);
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight:600;
  overflow: hidden;
  transition: 0.2s;
  color: #000;
  background: #fff;
  box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
  &:hover {
    color: #4d232d;
    box-shadow: 0 0 10px #000, 0 0 40px #000, 0 0 80px #000;
    border-radius: 10px;
  }
`;

export function Neonsm(props) {
  return (
    <Containersm  onClick={props.onClick}>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      { props.children }
    </Containersm>
  )
}