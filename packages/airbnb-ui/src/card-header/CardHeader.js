import React from "react";
import styled from "styled-components";
import styles from "../styles";

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: ${styles.fontFamily};
  margin: 20px 0;
`;

const Info = styled.div`
  display: block;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: block;
  width: 100%;
  color: ${styles.color.body};
`;

const Subtitle = styled.span`
  font-size: 11px;
  font-weight: 300;
  display: block;
  width: 100%;
  color: ${styles.color.body};
`;

const CardHeader = props => {
  const { avatar, title, subtitle, className, style } = props;
  return (
    <Header className={className} style={style}>
      {avatar ? avatar : null}
      <Info>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Info>
    </Header>
  );
};

export default CardHeader;
