import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import styles from "../styles";

const Btn = styled.button`
  background: ${props => props.theme.backgroundColor};
  border-radius: 4px;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow}
  color: ${props => props.theme.color};
  cursor: pointer;
  display: inline-block;
  font-family: ${styles.fontFamily};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight};
  line-height: 18px;
  margin: 0px;
  min-width: 51.77708763999664px;
  padding: ${props => props.theme.padding};
  position: relative;
  text-align: center;
  text-decoration: none;
  width: ${props => props.theme.width};

  &:focus {
    outline: none;
  }
`;

const warningTheme = {
  color: "#FFF",
  border: "1px solid #FF5A5F",
  backgroundColor: "#FF5A5F",
  fontWeight: "700"
};

const whiteTheme = {
  backgroundColor: "#FFF",
  border: "2px solid #FFF",
  color: styles.color.body,
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 4px 0px",
  fontWeight: 700,
  padding: "12px 24px"
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {}
    };
  }

  componentWillMount() {
    let theme = {
      color: "#008489",
      padding: "8px 16px",
      border: "1px solid #008489",
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 0px",
      fontWeight: 500,
      width: "auto"
    };
    // Apply themes
    if (this.props.warning) {
      theme = { ...theme, ...warningTheme };
    }

    if (this.props.white) {
      theme = { ...theme, ...whiteTheme };
    }

    // Apply sizes
    if (this.props.block) {
      const size = { width: "100%" };
      theme = { ...theme, ...size };
    }

    this.setState({ theme });
  }

  render() {
    const { theme } = this.state;
    const { onClick, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Btn onClick={onClick}>{children}</Btn>
      </ThemeProvider>
    );
  }
}

export default Button;
