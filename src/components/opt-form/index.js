import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

export default function OptForm({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restprops }) {
  return <Input {...restprops} />;
};

OptForm.Button = function OptFormButton({ children, ...restprops }) {
  return (
    <Button {...restprops}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restprops }) {
  return <Break {...restprops} />;
};
