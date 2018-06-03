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
  font-family: ${styles.fontFamily};
  display: ${props => props.theme.display || "block"};
`;

const leadTheme = {
  color: styles.color.dark,
  fontWeight: "800",
  fontSize: "36px",
  lineHeight: "42px",
  letterSpacing: "-.8px"
};

const title1Theme = {
  color: styles.color.body,
  fontWeight: "700",
  fontSize: "44px",
  lineHeight: "56px",
  letterSpacing: "-.8px"
};

const title2Theme = {
  color: styles.color.body,
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "36px"
};

const title3Theme = {
  color: styles.color.body,
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px"
};

const largeTheme = {
  lineHeight: "24px",
  fontSize: "19px",
  fontWeight: "400"
};

const regularTheme = {
  lineHeight: "22px",
  fontSize: "17px",
  letterSpacing: "-0.2px",
  margin: "10px 0"
};

const smallTheme = {
  lineHeight: "18px",
  fontSize: "14px"
};

const microTheme = {
  lineHeight: "8px",
  fontSize: "8px",
  fontWeight: "700"
};

const defaultTheme = regularTheme;

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
      case "lead":
        theme = { ...theme, ...leadTheme };
        break;
      case "title1":
        theme = { ...theme, ...title1Theme };
        break;
      case "title2":
        theme = { ...theme, ...title2Theme };
        break;
      case "title3":
        theme = { ...theme, ...title3Theme };
        break;
      case "large":
        theme = { ...theme, ...largeTheme };
        break;
      case "regular":
        theme = { ...theme, ...regularTheme };
        break;
      case "small":
        theme = { ...theme, ...smallTheme };
        break;
      case "micro":
        theme = { ...theme, ...microTheme };
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
