import React from "react";
import styled from "styled-components";
import styles from "../styles";

const Content = styled.div`
`;

const CardContent = props => (
  <Content style={props.style}>{props.children}</Content>
);

export default CardContent;
