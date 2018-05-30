import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, ExploreCard } from "../index";

const imageSrc =
  "https://a0.muscache.com/im/pictures/7e6d4e06-1e8f-47f2-9ffc-12a6d48b4406.jpg";

storiesOf("ExporeCard", module)
.add("with image", () => (
  <ExploreCard onClick={action("clicked")} imageSrc={imageSrc}>
    Esportes
  </ExploreCard>
));

storiesOf("Button", module)
.add("default", () => (
  <Button>Fale com o anfitrião</Button>
))
.add("white", () => (
  <Button white>Explore acomodações Airbnb Plus</Button>
))
.add("warning", () => (
  <Button warning>Reservar</Button>
))
.add("block", () => (
  <Button warning block>Reservar</Button>
))