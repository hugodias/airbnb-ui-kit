import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  height: 100%;
  position: relative;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
`;

class Card extends Component {
  render() {
    return (
      <Container onClick={this.props.onClick} style={this.props.style}>
        {this.props.children}
      </Container>
    );
  }
}

export default Card;
