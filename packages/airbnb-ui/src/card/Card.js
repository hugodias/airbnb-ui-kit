import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding-top: 66%;
  height: 100%;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
`;

const Info = styled.div`
    display: block;
    padding-top: 8px;
`;

class Card extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.src} />
        <Info>{this.props.children}</Info>
      </Container>
    );
  }
}

export default Card;