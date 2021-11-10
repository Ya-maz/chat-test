import React, { useState } from "react";
import Arrow from "./../../../../assets/Vector_arrow.svg";
import { Button, Container } from "./../../../UI/Button";
import { LanguageContainer, List, ListItemStyle, LinkStyle } from "./styles";

const Link = ({ label, value, onClick }) => {
  return (
    <LinkStyle onClick={onClick} value={value}>
      {label}
    </LinkStyle>
  );
};

const ListItem = ({ children, open, setOpen, handleChange }) => {
  const lng = children.map((child) => {
    const handleClick = (e) => {
      setOpen(!open);
      handleChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      value: child.props.value,
      onClick: handleClick,
    });
  });
  return <ListItemStyle>{lng}</ListItemStyle>;
};

export default function LanguageBox({ activeLNG, handleChange }) {
  const [open, setOpen] = useState(false);

  return (
    <LanguageContainer margin="0 5px">
      <Container flex>
        <Container margin="0 5px 0 0">
          {activeLNG === 0 ? "RU" : activeLNG === 1 ? "EN" : "ZHO"}
        </Container>
        <Button margin="3px 0" onClick={() => {
          setOpen(!open)
        }}>
          <img
            src={Arrow}
            alt="down"
            style={{ transform: "rotate(0.25turn)" }}
          />
        </Button>
      </Container>

      <List open={open}>
        <ListItem open={open} setOpen={setOpen} handleChange={handleChange}>
          <Link label="RU" value={0} />
          <Link label="EN" value={1} />
          <Link label="ZHO" value={2} />
        </ListItem>
      </List>
    </LanguageContainer>
  );
}
