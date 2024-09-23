import Modal from "components/Modal";
import "../index.css";

interface ModalStoriesProps {
  className: "string",
  isVisible: boolean,
  children: "string",
}

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
      type: "boolean",
      default: true,
    },
    children: {
      type: "string",
      name: "label",
      default: "Click me",
    },
  },
};

const Template = (arg: ModalStoriesProps) => (
  <Modal {...arg}>
    Modal
  </Modal>
);

export const ModalStory = Template.bind({});
