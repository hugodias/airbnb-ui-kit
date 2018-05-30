import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const Typography = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-ieght: ${props => props.lineHeight};
  -webkit-font-smoothing: antialiased;
`;

const defaultTheme = {
  color: "blue",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "40px"
};

const h1Theme = {
  color: "rgb(72, 72, 72)",
  fontWeight: "normal",
  fontSize: "14px"
};

const h2Theme = {
  color: "blue",
  fontWeight: "800",
  fontSize: "16px"
};

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {}
    };
  }

  componentWillMount() {
    let theme = defaultTheme;

    // Apply themes
    if (this.props.h1) {
      theme = { ...theme, ...h1Theme };
    } else if (this.props.h2) {
      theme = { ...theme, ...h2Theme };
    }
    
    console.log(theme);

    this.setState({ theme });
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Typography>{this.props.children}</Typography>
      </ThemeProvider>
    );
  }
}

export default Text;
