import React from "react";
import { Container, Title, List, Picture, Name, Item } from "./styles/profiles";

export default function Profiles({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restprops }) {
  return <List {...restprops}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restprops }) {
  return <Item {...restprops}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restprops }) {
  return (
    <Picture
      {...restprops}
      src={src ? `./images/users/${src}.png` : `./images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restprops }) {
  return <Name {...restprops}>{children}</Name>;
};
