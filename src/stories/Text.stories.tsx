import { Text } from "components/Text";
import "../index.css";

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
      description: "text style variant",
      defaultValue: "utility",
      options: ["normal", "priceUp", "priceDown", "utility"],
    },
    children: {
      type: "string",
      name: "label",
      default: "Text",
    },
  },
};

const Template = (arg: unknown[]) => <Text {...arg}>Text</Text>;

export const ButtonStory = Template.bind({});
