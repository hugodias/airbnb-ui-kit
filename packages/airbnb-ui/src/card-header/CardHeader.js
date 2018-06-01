import React from "react";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const Subtitle = styled.span`
    font-size: 12px !important;
    font-weight: 300;
`

const CardHeader = props => {
  const { avatar, title, subtitle } = props;
  return (
    <Header>
      {avatar ? <Avatar>{avatar}</Avatar> : null}
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Header>
  );
};

export default CardHeader;
