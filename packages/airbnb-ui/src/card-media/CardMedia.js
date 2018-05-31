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
  border-radius: 3px;
  background-image: url(${props => props.src});
  margin-bottom: 8px;
`;

const CardMedia = props => (
  <Media src={props.src} style={props.style} />
);

export default CardMedia;
