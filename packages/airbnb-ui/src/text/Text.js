import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const Typography = styled.p`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme.color};
  font-weight: ${props => props.theme.fontWeight};
  font-size: ${props => props.theme.fontSize};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily || '"Roboto", sans-serif'};
`;

const defaultTheme = {
  color: "#2b2b2b",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "40px",
  letterSpacing: "0px"
};

const titleTheme = {
  color: "#2b2b2b",
  fontWeight: "700",
  fontSize: "34px",
  lineHeight: "40px",
  letterSpacing: "-.8px"
};

const headlineTheme = {
  color: "#767676",
  fontWeight: "300",
  fontSize: "34px",
  lineHeight: "40px",
  letterSpacing: "-.4px"
};

const paragraphTheme = {
  fontFamily: "'Arimo', sans-serif;",
  lineHeight: "22px"
}

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {}
    };
  }

  componentWillMount() {
    let theme = defaultTheme;
    const { type, size } = this.props;

    // Apply themes
    switch (type) {
      case "title":
        theme = { ...theme, ...titleTheme };
        break;
      case "headline":
        theme = { ...theme, ...headlineTheme };
        break;
      case "paragraph":
        theme = { ...theme, ...paragraphTheme };
        break;
    }

    this.setState({ theme });
  }

  render() {
    const { theme } = this.state;
    const Tag = Typography.withComponent(this.props.tag || "p");
    return (
      <ThemeProvider theme={theme}>
        <Tag style={this.props.style}>{this.props.children}</Tag>
      </ThemeProvider>
    );
  }
}

export default Text;
