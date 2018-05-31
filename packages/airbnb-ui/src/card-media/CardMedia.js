import React, { Component } from "react";
import styled from "styled-components";

const Media = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-image: url(${props => props.src})
`;

const CardMedia = props => (
  <Media src={props.src} style={props.style} />
);

export default CardMedia;