import { Text } from "components/Text";
import "../index.css";

interface TextStoriesProps {
  className: "string",
  children: "string"
}

export default {
  title: "Text",
  component: Text,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      default: "",
    },
    variant: {
      type: "string",
      description: "text component",
      defaultValue: "priceUp",
      options: ["normal", "priceUp", "priceDown", "utility"],
      control: {
        type: "radio",
      },
      table: {
        type: {summary: "string"},
      }
    },
    children: {
      type: "string",
      name: "label",
      defaultValue: "Text",
    },
  },
};

const Template = (arg: TextStoriesProps) => <Text {...arg}>Text</Text>;

export const TextStory = Template.bind({});
