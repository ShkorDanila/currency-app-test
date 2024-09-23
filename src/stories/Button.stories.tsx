import { ReactNode } from "react";
import Button from "../components/Button";
import "../index.css";

interface ButtonStoriesProps {
  className: "string",
  children: "string"
}

export default {
  title: "Button",
  component: Button,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      table: {
        defaultValue: { summary: "bg-black" },
        type: { summary: 'string' },
      },
    },
    children: {
      type: "string",
      table: { defaultValue: { summary: "Hello world" } },
    },
  },
};

const Template = (arg: ButtonStoriesProps) => <Button className={arg.className}>Button</Button>;


export const ButtonStory = Template.bind({});
