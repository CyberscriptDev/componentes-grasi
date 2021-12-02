import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Body, Caption, Label } from "../Typography.styles";

export default {
  title: "Components/Atoms/Typography",
  argTypes: {
    color: {
      options: [
        "textBody",
        "textCaption",
        "title",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
      ],
      control: { type: "select" },
      defaultValue: "title",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "title" },
      },
    },
    fontWeight: {
      options: ["thin", "normal", "bold"],
      control: { type: "select" },
      defaultValue: "bold",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "bold" },
      },
    },
    lineHeight: {
      options: ["xs", "sm", "md", "lg", "xlg"],
      control: { type: "select" },
      defaultValue: "md",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    textAlign: {
      options: ["left", "center", "right", "justify"],
      control: { type: "select" },
      defaultValue: "left",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "left" },
      },
    },
    decoration: {
      options: ["underline", "lineThrough", "none"],
      control: { type: "select" },
      defaultValue: "none",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "none" },
      },
    },
    transform: {
      options: ["uppercase", "lowercase", "capitalize", "none"],
      control: { type: "select" },
      defaultValue: "none",
      type: { required: false },
      description: "string",
      table: {
        defaultValue: { summary: "none" },
      },
    },
  },
};

export const Title1: ComponentStory<typeof Heading1> = (args) => 
  <Heading1 {...args}>Hello, Heading1</Heading1>
;

export const Title2: ComponentStory<typeof Heading2> = (args) => 
  <Heading2 {...args}>Hello, Heading2</Heading2>
;

export const Title3: ComponentStory<typeof Heading3> = (args) => 
  <Heading3 {...args}>Hello, Heading3</Heading3>
;

export const Title4: ComponentStory<typeof Heading4> = (args) => 
  <Heading4 {...args}>Hello, Heading4</Heading4>
;

export const Title5: ComponentStory<typeof Heading5> = (args) => 
  <Heading5 {...args}>Hello, Heading5</Heading5>
;

export const Title6: ComponentStory<typeof Heading6> = (args) => 
  <Heading6 {...args}>Hello, Heading6</Heading6>
;

export const Paragraph: ComponentStory<typeof Body> = (args) => 
  <Body {...args}>Hello, Body</Body>
;

Paragraph.args = {
  color: "textBody",
  fontWeight: "normal",
  lineHeight: "sm",
};

export const Small1: ComponentStory<typeof Caption> = (args) => 
  <Caption {...args}>Hello, Caption</Caption>
;

Small1.args = {
  color: "textCaption",
  fontWeight: "normal",
  lineHeight: "sm",
};

export const Small2: ComponentStory<typeof Label> = (args) => 
  <Label {...args}>Hello, Label</Label>
;

Small2.args = Small1.args;

Title1.storyName = "Heading1";
Title2.storyName = "Heading2";
Title3.storyName = "Heading3";
Title4.storyName = "Heading4";
Title5.storyName = "Heading5";
Title6.storyName = "Heading6";
Paragraph.storyName = "Body";
Small1.storyName = "Caption";
Small2.storyName = "Label";