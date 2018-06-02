import React from "react";
import styled from "styled-components";

const className = ["ExploreCard"];

const Container = styled.section`
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  display: inline-flex;
  flex-direction: row;
  min-width: 265px;
  cursor: pointer;
`;

const Image = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.src});
  border: 0;
  width: 96px;
  height: 72px;
`;

const Text = styled.div`
  align-self: center;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0px;
  color: rgb(72, 72, 72) !important;
  font-weight: 700;
  padding-left: 16px !important;
  padding-right: 16px !important;
  font-family: 'Montserrat', sans-serif;
`;

const ExploreCard = props => (
  <Container
    onClick={props.onClick}
    className={className.concat(props.className).join(" ")}
  >
    <Image src={props.imageSrc} />
    <Text>{props.children}</Text>
  </Container>
);

export default ExploreCard;
