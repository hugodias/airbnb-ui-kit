import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import styles from "../styles";

const Typography = styled.p`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme.color};
  font-weight: ${props => props.theme.fontWeight};
  font-size: ${props => props.theme.fontSize};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  margin: ${props => props.theme.margin || 0};
  padding: ${props => props.theme.padding || 0};
  font-family: ${props => props.theme.fontFamily || styles.fontFamily};
  display: ${props => props.theme.display || "block"};
`;

const defaultTheme = {
  color: styles.color.body,
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "40px",
  letterSpacing: "0px"
};

const titleTheme = {
  color: styles.color.body,
  fontWeight: "800",
  fontSize: "34px",
  lineHeight: "40px",
  letterSpacing: "-.8px"
};

const headlineTheme = {
  color: styles.color.headline,
  fontWeight: "300",
  fontSize: "34px",
  lineHeight: "40px",
  letterSpacing: "-.4px"
};

const paragraphTheme = {
  lineHeight: "22px",
  fontSize: "14px",
  letterSpacing: "-0.2px",
  margin: "10px 0"
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
    const { type, display } = this.props;

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

    switch (display) {
      case "inline":
        theme = { ...theme, ...{ display: "inline-block" } };
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
