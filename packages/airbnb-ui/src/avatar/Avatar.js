import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily } from "../styles";

const Wrapper = styled.div`
  alignitems: center;
  border-radius: 50%;
  display: flex;
  flexshrink: 0;
  font-family: ${fontFamily};
  font-size: 12px;
  height: ${props => props.size || 20}px;
  justifycontent: center;
  overflow: hidden;
  position: relative;
  user-select: none;
  width: ${props => props.size || 20}px;
  margin: 0 20px 0 0;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  text-align: center;
  width: 100%;
`;

const Avatar = props => {
  const {
    alt,
    children: childrenProp,
    className: classNameProp,
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;
  let children = null;
  const className = classNameProp;

  children = <Image alt={alt} src={src} sizes={sizes} {...imgProps} />;

  return (
    <Wrapper className={className} {...other}>
      {children}
    </Wrapper>
  );
};

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Properties applied to the `img` element when the component
   * is used to display an image.
   */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string.isRequired
};

export default Avatar;
