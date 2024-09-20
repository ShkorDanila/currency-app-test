import Modal from "components/Modal";
import "../index.css";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    className: {
      type: "string",
      name: "styles",
      default: "",
    },
    isVisible: {
      default: true
    },
    children: {
      type: "string",
      name: "label",
      default: "Click me",
    },
  },
};

const Template = (arg: unknown[]) => <Modal isVisible {...arg}>Add</Modal>;

export const ButtonStory = Template.bind({});