import React from "react";
import { TabPanel } from "./../Header/Tabs/Tabs";
import { Messages } from "./Messages/Messages";

import { TabPanelContainer } from "./styles";

export const Main = React.forwardRef(
  ({ activeTab, activeLNG, state }, ref) => {
    return (
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          {activeTab === 0 && activeLNG === 0 ? (
            <Messages {...state} ref={ref} />
          ) : (
            <h1>Общий</h1>
          )}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Клан</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Друзья</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <h1>Новости</h1>
        </TabPanel>
      </TabPanelContainer>
    );
  }
);
