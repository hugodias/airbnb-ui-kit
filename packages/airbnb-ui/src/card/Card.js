import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  height: 100%;
  position: relative;
`;

class Card extends Component {
  render() {
    return (
      <Container style={this.props.style}>
        {this.props.children}
      </Container>
    );
  }
}

export default Card;
