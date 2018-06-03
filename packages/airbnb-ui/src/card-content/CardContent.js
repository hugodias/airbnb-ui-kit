import React from "react";
import styled from "styled-components";
import styles from "../styles";

const Content = styled.div`
  h3 {
    font-size: 20px;
  }

  h2 {
    font-size: 30px;
    line-height: 22px;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: ${styles.color.black};
    margin: 0;
  }

  span {
    color: ${styles.color.red};
    font-size: 12px;
    line-height: 16px;
    letter-spacing: normal;
    font-weight: 700;
    word-wrap: break-word;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 13px;
    line-height: 18px;
    font-weight: normal;
    letter-spacing: -0.2px;
    color: ${styles.color.body};
    margin: 0;
  }
`;

const CardContent = props => (
  <Content style={props.style}>{props.children}</Content>
);

export default CardContent;
