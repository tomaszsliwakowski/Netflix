import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restprops }) {
  return (
    <Container {...restprops}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restprops }) {
  const [toggleShow, settoggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, settoggleShow }}>
      <Item {...restprops}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restprops }) {
  const { toggleShow, settoggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => settoggleShow((toggleShow) => !toggleShow)}
      {...restprops}
    >
      {children}
      {toggleShow ? (
        <img src="./images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="./images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restprops }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restprops}>{children}</Body> : null;
};
