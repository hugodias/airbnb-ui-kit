import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, ExploreCard, Card, CardMedia, Text } from "../index";
import "../styles/index.css";

const imageSrc =
  "https://a0.muscache.com/im/pictures/7e6d4e06-1e8f-47f2-9ffc-12a6d48b4406.jpg";

const cardImageSrc =
  "https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large";

storiesOf("ExporeCard", module).add("with image", () => (
  <ExploreCard onClick={action("clicked")} imageSrc={imageSrc}>
    Esportes
  </ExploreCard>
));

storiesOf("Button", module)
  .add("default", () => <Button>Fale com o anfitrião</Button>)
  .add("white", () => <Button white>Explore acomodações Airbnb Plus</Button>)
  .add("warning", () => <Button warning>Reservar</Button>)
  .add("block", () => (
    <Button warning block>
      Reservar
    </Button>
  ));

storiesOf("Typography", module).add("Text", () => (
  <div>
    <Text type="title" tag="h1">
      This is a title
    </Text>
    <Text type="headline" tag="h2">
      This is a headline
    </Text>
    <Text type="paragraph" tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus
      commodo consequat. Sed vel facilisis nibh, quis facilisis velit.
      Vestibulum mattis elit vel diam laoreet, eget facilisis erat lacinia. Nunc
      eu libero eu ligula venenatis bibendum eu ut eros. Aenean dolor lorem,
      fringilla sed sapien ac, vulputate ultrices diam. Ut luctus tellus dolor.
      Maecenas tincidunt malesuada aliquam. Nullam gravida nec felis eget
      pretium. Proin fermentum pulvinar auctor.
    </Text>
  </div>
));

const cardStyles = {
  card: {
    maxWidth: 345
  }
};

storiesOf("Card", module).add("with image", () => (
  <Card style={cardStyles.card}>
    <CardMedia src={cardImageSrc} />
    <Text type="title" tag="h3">
      Barco - Charleston
    </Text>
    <Text type="headline" tag="h2">
      A Pirate's Life For me - Houseboat!
    </Text>
  </Card>
));
