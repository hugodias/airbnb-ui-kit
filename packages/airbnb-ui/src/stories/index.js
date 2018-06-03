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
  Divider,
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
    <Divider />
    <Text type="lead" tag="h1">
      A unified design language shouldn’t be just a set of static rules and
      individual atoms; it should be an evolving ecosystem.
    </Text>
    <Divider />
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
    <Divider />
    <Text type="regular" tag="p">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi architecto
      consectetur mollitia eius laborum explicabo ratione, quas delectus magnam
      neque temporibus illo, optio quia eos qui deserunt ut! Porro,
      necessitatibus?
    </Text>
  </div>
));

const cardStyles = {
  card: {
    maxWidth: 268
  },
  media: {
    borderRadius: "3px"
  },
  header: {
    padding: "20px"
  },
  content: {
    padding: "10px 20px 20px 20px"
  },
  background: {
    background: "#F2F2F2",
    width: "100%",

    height: "auto",
    padding: "30px"
  },
  listing: {
    span: {
      color: styles.color.red,
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 700,
      textTransform: "uppercase",
      margin: 0
    },
    h2: {
      fontSize: "30px",
      lineHeight: "22px",
      fontSize: "16px",
      fontWeight: 700,
      color: styles.color.black,
      margin: 0,
    },
    text: {
      fontSize: "13px",
      margin: 0
    }
  }
};

storiesOf("Card", module)
  .add("apartament listing", () => (
    <Card style={cardStyles.card} onClick={action("clicked")}>
      <CardMedia src={cardImageSrc} style={cardStyles.media} />
      <CardContent>
        <Text tag="span" style={cardStyles.listing.span}>CABANA INTEIRA · JOSHUA TREE</Text>
        <Text tag="h2"  style={cardStyles.listing.h2}>Joshua Tree Homesteader Cabin</Text>
        <Text type="small" tag="span" style={cardStyles.listing.text}>
          R$ 408 por noite · Cancelamento gratuito
        </Text>
      </CardContent>
    </Card>
  ))
  .add("with avatar and image", () => (
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
          <Text type="small" tag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
            exercitationem ullam aut quis quisquam pariatur dolor atque facilis!
            Accusamus beatae id assumenda velit molestias odio architecto
            aliquid blanditiis deleniti.
          </Text>
        </CardContent>
      </Card>
    </div>
  ));
