import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { useDispatch } from "react-redux";
import { addNewsREST } from "../store/news/action";
import { Post } from "../store/news/types";

interface FormFields {
  title: string;
  description: string;
}
enum fieldNames {
  title = "title",
  description = "description",
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="site-layout-content">
      <Divider plain>
        <h1>Add new post</h1>
      </Divider>
      <Form
        name="nest-messages"
        className={"form_post"}
        initialValues={{ remember: true }}
        onFinish={(values: unknown) => {
          const fields = values as FormFields;
          const request: Post = {
            title: fields.title,
            description: fields.description,
          };
          console.log("dfdfdf");
          dispatch(addNewsREST(request));
        }}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name={fieldNames.title}
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input placeholder={"title"} />
        </Form.Item>
        <Form.Item name={fieldNames.description}>
          <Input.TextArea placeholder={"description"} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Dashboard;
