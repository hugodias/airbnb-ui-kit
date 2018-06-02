import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  height: 100%;
  position: relative;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  box-shadow: ${props =>
    props.shadow ? "rgba(0, 0, 0, 0.06) 0px 1px 0px 0px" : "#FFF 0px 0px 0px"};
  background: ${props => (props.shadow ? "#FFF" : "transparent")};
`;

class Card extends Component {
  render() {
    const { onClick, style, shadow } = this.props;
    return (
      <Container onClick={onClick} style={style} shadow={shadow}>
        {this.props.children}
      </Container>
    );
  }
}

export default Card;
