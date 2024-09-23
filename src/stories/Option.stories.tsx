import Option from "components/Option";
import "../index.css";

interface OptionStoriesProps {
  className: "string",
  initial: string,
  children: "string",
  onOptionChange: () => {},
  options: string[]
}


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
      type: "array" ,
      name: "string",
      default: "",
    },
    initial: {
      type: "string",
      name: "initial option",
      default: "",
    },
  },
};

const Template = (arg: OptionStoriesProps) => (
  <Option
    initial={arg.initial}
    className={arg.className}
    onOptionChange={() => {}}
    options={['1','2','3']}
  ></Option>
);

export const OptionStory = Template.bind({});
