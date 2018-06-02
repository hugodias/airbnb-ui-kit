import React from "react";
import styled from "styled-components";

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
    color: rgb(72, 72, 72);
  }

  span {
    color: rgb(165, 41, 3);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: normal;
    font-weight: 700;
    word-wrap: break-word;
    text-transform: uppercase;
  }

  p {
    font-size: 13px;
    line-height: 18px;
    font-weight: normal;
    letter-spacing: -0.2px;
    color: rgb(72, 72, 72);
  }
`;

const CardContent = props => (
<Content>{props.children}</Content>
);

export default CardContent;
