import React from "react";
import {
  Card,
  Main,
  Grid,
  Column,
  Row,
} from "../components/containers/Containers.styles";
import {
  Body,
  Caption,
  Heading1,
  Heading6,
  Label,
} from "../components/typography/Typography.styles";

export function Home() {
  return (
    <Main gap="xlg">
      <Heading1>Hello, Containers!</Heading1>
      <Card>
        <Heading6>Card</Heading6>
        <Column>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
          <Label color="emerald">Consectetur adipisicing elit</Label>
        </Column>
      </Card>
      <Grid>
        <Card bgColor="primary" borderRadius="rounded" borderColor="none">
          <Heading6 color="white">Card</Heading6>
          <Body color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card bgColor="secondary" borderRadius="rounded" borderColor="none">
          <Heading6 color="white" textAlign="center">
            Card
          </Heading6>
          <Body color="white" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card bgColor="info" borderRadius="rounded" borderColor="none">
          <Heading6 color="white" textAlign="right">
            Card
          </Heading6>
          <Body color="white" textAlign="right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card bgColor="success" borderColor="none">
          <Heading6 color="white">Card</Heading6>
          <Body color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card bgColor="warning" borderColor="none">
          <Heading6 color="white">Card</Heading6>
          <Body color="white" decoration="underline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card bgColor="danger" borderColor="none">
          <Heading6 color="white">Card</Heading6>
          <Body color="white" decoration="lineThrough">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card shadow="card">
          <Row justifyContent="start" alignItems="baseline">
            <Heading6 color="blue">Card</Heading6>
            <Caption color="blue">ipsum dolor sit amet</Caption>
          </Row>
          <Body color="gray400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card shadow="card" borderRadius="rounded">
          <Row justifyContent="start" alignItems="baseline">
            <Heading6 color="deepOrange">Card</Heading6>
            <Caption color="deepOrange">ipsum dolor sit amet</Caption>
          </Row>
          <Body color="tealGray400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
        <Card shadow="card" borderRadius="full">
          <Row justifyContent="start" alignItems="baseline">
            <Heading6 color="purple">Card</Heading6>
            <Caption color="purple">ipsum dolor sit amet</Caption>
          </Row>
          <Body color="blueGray400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            quidem ipsa facilis quasi dicta in repellendus harum deserunt animi
            recusandae nulla tempore, dignissimos, hic eaque corrupti ab
            perspiciatis aliquam iure.
          </Body>
        </Card>
      </Grid>
    </Main>
  );
}
