import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import {
  Button,
  ExploreCard,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Text
} from "../index";
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
    <Text type="title" tag="h1" display="inline">This is a inline title  · </Text>
    <Text type="headline" tag="h2" display="inline">This is a inline headline</Text>
    <Text type="paragraph" tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus
      commodo consequat. Sed vel facilisis nibh, quis facilisis velit.
      Vestibulum mattis elit vel diam laoreet, eget facilisis erat lacinia. Nunc
      eu libero eu ligula venenatis bibendum eu ut eros.
    </Text>
    <Text type="paragraph" tag="p">
      Aenean dolor lorem, fringilla sed sapien ac, vulputate ultrices diam. Ut
      luctus tellus dolor. Maecenas tincidunt malesuada aliquam. Nullam gravida
      nec felis eget pretium. Proin fermentum pulvinar auctor.
    </Text>
  </div>
));

const cardStyles = {
  card: {
    maxWidth: 268
  }
};

storiesOf("Card", module)
  .add("with image", () => (
    <Card style={cardStyles.card} onClick={action("clicked")}>
      <CardMedia src={cardImageSrc} />
      <CardContent>
        <Text tag="span">CABANA INTEIRA · JOSHUA TREE</Text>
        <Text tag="h2">Joshua Tree Homesteader Cabin</Text>
        <Text type="paragraph" tag="p">
          R$ 408 por noite · Cancelamento gratuito
        </Text>
      </CardContent>
    </Card>
  ))
  .add("with header", () => (
    <Card style={cardStyles.card} onClick={action("clicked")}>
      <CardHeader title="Header title" subtitle="September 14, 2016" />
    </Card>
  ));
