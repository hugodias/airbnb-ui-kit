import React, { Component } from "react";
import styled from "styled-components";
import styles from "../styles";

const Container = styled.div`
  height: 2px;
  width: 30px;
  margin: 60px 0;
  background-color: ${styles.color.green};
`;

const Divider = props => <Container />;

export default Divider;
