import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ignite-ui/react"

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Enviar",
  }
} as Meta;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {};
