import Input from "components/Input";
import "../index.css";

interface InputStoriesProps {
  placeholder: "string",
  children: "string",
}

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

const Template = (arg: InputStoriesProps) => <Input {...arg}></Input>;

export const InputStory = Template.bind({});
