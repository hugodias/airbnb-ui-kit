import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ExploreCard,
  Text
} from "../index";
import "../styles/index.css";

import styles from "../styles";

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
    <Text type="title1" tag="h1">
      Title 1 · 44/56
    </Text>
    <Text type="title2" tag="h1">
      Title 2 · 32/26
    </Text>
    <Text type="title3" tag="h1">
      Title 3 · 24/28
    </Text>
    <Text type="large" tag="h1">
      Large · 19/24
    </Text>
    <Text type="regular" tag="p">
      Regular · 17/22
    </Text>
    <Text type="small" tag="span">
      Small · 14/18
    </Text>
    <Text type="micro" tag="span">
      Micro · 8/8
    </Text>
  </div>
));

const cardStyles = {
  card: {
    maxWidth: 268,
  },
  media: {
    borderRadius: "3px"
  },
  header: {
    padding: "20px",
  },
  content: {
    padding: "10px 20px 20px 20px"
  },
  background: {
    background: "#F2F2F2",
    width: "100%",
    
    height: "auto",
    padding: "30px"
  }
};

storiesOf("Card", module)
  .add("with image", () => (
    <Card style={cardStyles.card} onClick={action("clicked")}>
      <CardMedia src={cardImageSrc} style={cardStyles.media} />
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
    <div style={cardStyles.background}>
      <Card style={cardStyles.card} onClick={action("clicked")} shadow>
        <CardHeader
          avatar={
            <Avatar
              src="https://api.adorable.io/avatars/100/hugooodias@gmail.com.png"
              size="35"
            />
          }
          title="Username"
          subtitle="Apr, 2018"
          style={cardStyles.header}
        />
        <CardMedia src={cardImageSrc} />
        <CardContent style={cardStyles.content}>
          <Text type="paragraph" tag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
            exercitationem ullam aut quis quisquam pariatur dolor atque facilis!
            Accusamus beatae id assumenda velit molestias odio architecto
            aliquid blanditiis deleniti.
          </Text>
        </CardContent>
      </Card>
    </div>
  ));
