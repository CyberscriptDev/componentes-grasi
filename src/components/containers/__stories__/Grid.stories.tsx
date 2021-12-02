import React from "react";
import { ComponentStory } from "@storybook/react";
import { Grid, Card } from "../Containers.styles";
import { Body, Heading6 } from "../../typography/Typography.styles";

export default {
  title: "Components/Atoms/Containers",
  component: Grid,
  argTypes: {
    gap: {
      options: ["xs", "sm", "md", "lg", "xlg", "none"],
      control: { type: "select" },
      defaultValue: "md",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    verticalMargin: {
      options: ["xs", "sm", "md", "lg", "xlg", "none"],
      control: { type: "select" },
      defaultValue: "md",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
};

export const ContainerGrid: ComponentStory<typeof Grid> = (args) => {
  return (
    <Grid {...args}>
      <Card bgColor="info" borderRadius="rounded" borderColor="none">
        <Heading6 color="white" textAlign="right">
          Card
        </Heading6>
        <Body color="white" textAlign="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem
          ipsa facilis quasi dicta in repellendus harum deserunt animi
          recusandae nulla tempore, dignissimos, hic eaque corrupti ab
          perspiciatis aliquam iure.
        </Body>
      </Card>
      <Card bgColor="success" borderColor="none">
        <Heading6 color="white">Card</Heading6>
        <Body color="white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem
          ipsa facilis quasi dicta in repellendus harum deserunt animi
          recusandae nulla tempore, dignissimos, hic eaque corrupti ab
          perspiciatis aliquam iure.
        </Body>
      </Card>
      <Card bgColor="warning" borderColor="none">
        <Heading6 color="white">Card</Heading6>
        <Body color="white" decoration="underline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem
          ipsa facilis quasi dicta in repellendus harum deserunt animi
          recusandae nulla tempore, dignissimos, hic eaque corrupti ab
          perspiciatis aliquam iure.
        </Body>
      </Card>
    </Grid>
  );
};

ContainerGrid.storyName = "Grid";
