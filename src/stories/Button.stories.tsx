import Button from "../components/Button";
import "../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      default: "",
    },
    children: {
      type: "string",
      name: "label",
      default: "Click me",
    },
  },
};

const Template = (arg: unknown[]) => <Button {...arg}>Add</Button>;

export const ButtonStory = Template.bind({});