import Option from "components/Option";
import "../index.css";

export default {
  title: "Option",
  component: Option,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      default: "",
    },
    options: {
      type: "string[]",
      name: "options",
      default: "",
    },
    initial: {
      type: "string",
      name: "initial option",
      default: "",
    },
  },
};

const Template = (arg: unknown[]) => (
  <Option
    initial='Init'
    options={["1", "2", "3"]}
    onOptionChange={() => {}}
    {...arg}
  ></Option>
);

export const ButtonStory = Template.bind({});
