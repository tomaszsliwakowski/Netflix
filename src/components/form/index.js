import React from "react";
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Base,
} from "./styles/form";

export default function Form({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restprops }) {
  return <Error {...restprops}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restprops }) {
  return <Base {...restprops}>{children}</Base>;
};
Form.Title = function FormTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};
Form.Text = function FormText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
Form.TextSmall = function FormTextSmall({ children, ...restprops }) {
  return <TextSmall {...restprops}>{children}</TextSmall>;
};
Form.Link = function FormLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};
Form.Input = function FormInput({ children, ...restprops }) {
  return <Input {...restprops}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restprops }) {
  return <Submit {...restprops}>{children}</Submit>;
};
