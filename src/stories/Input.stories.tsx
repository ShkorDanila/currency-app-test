import Input from "components/Input";
import "../index.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      default: "",
    },
    placeholder: {
      type: "string",
      name: "placeholder",
      default: "0",
    },
  },
};

const Template = (arg: unknown[]) => <Input placeholder='0' {...arg}></Input>;

export const ButtonStory = Template.bind({});
