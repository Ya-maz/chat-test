import React from "react";
import Arrow from "./../../../assets/Vector_arrow.svg";
import ButtonSize from "./../../../assets/Vector_enlarge.svg";
import ButtonToggle from "./../../../assets/minimize 2.svg";
import { Tabs, Tab } from "./../Header/Tabs/Tabs"
import LanguageBox from "./../Header/LanguageBox/LanguageBox";
import { Button } from "./../../UI/Button";
import { TabsContainer } from "./styles"

export default function Header({activeTab, activeLNG, handleChange, toggle, changeSize, open}) {
  return (
    <TabsContainer>
      <Tabs selectedTab={activeTab} onChange={handleChange} open={open}>
        <Tab label="Общий" value={0}></Tab>
        <Tab label="Клан" value={1}></Tab>
        <Tab label="Друзья" value={2}></Tab>
        <Tab label="Новости" value={3}></Tab>
      </Tabs>
      <Button margin="5px">
          <img src={Arrow} alt="left" />
      </Button>
      <LanguageBox handleChange={handleChange} activeLNG={activeLNG}/>
      <Button margin="5px" onClick={changeSize}><img src={ButtonSize} alt="size" /></Button>
      <Button margin="10px" onClick={toggle}><img src={ButtonToggle} alt="left" /></Button>          
    </TabsContainer>
  )
}