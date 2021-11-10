import React, { useRef, useEffect, useState } from "react";

import {
  TabHeaderContainer,
  StylizedTab,
  StyledTabPanel,
  TabsHolder,
  TabSlider
} from "./styles";

export const Tab = ({ label, active, value, onClick }) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      value={value}
    >
      {label}
    </StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children, open }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }, [open]);

  const sliderWidth = containerWidth / children.length;
 

  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      value: child.props.value,
      onClick: handleClick
    });
  });

  return (
    <TabHeaderContainer ref={containerRef}>
      <TabsHolder>{tabs}</TabsHolder>
      <TabSlider width={sliderWidth} index={selectedTab} />
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;
  const panelRef = useRef(null);

  return (
    <StyledTabPanel ref={panelRef} hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};
