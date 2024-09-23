import "../index.css";
import Table from "components/Table";

interface TableStoryProps {
  className: "string",
  children: "string"
}


export default {
  title: "Table",
  component: Table,
  argTypes: {
    className: {
      type: "string",
      name: "Table styles",
    },
  },
};

const Template = (arg: TableStoryProps) => (
  <Table {...arg}>
    <div>First</div>
    <div>Secord</div>
    <div>Third</div>
  </Table>
);

export const TableStory = Template.bind({});
