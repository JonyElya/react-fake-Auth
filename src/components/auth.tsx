import React, { useCallback, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./style.css";
import { SignInData } from "../store/user/types";
import { checkAuthStatus, fetchLoginREST } from "../store/user/action";
import { useDispatch } from "react-redux";

interface LoginFormFields {
  name: string;
  password: string;
}
enum fieldNames {
  name = "name",
  password = "password",
}

const Login: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClose = useCallback(() => {
    setVisible(false);
    if (checkAuthStatus()) {
      history.replace(`/dashboard`);
    } else {
      history.replace(`/`);
    }
  }, [history]);

  return (
    <Modal
      visible={visible}
      onOk={handleClose}
      onCancel={handleClose}
      title={"Login"}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={(values: unknown) => {
          const fields = values as LoginFormFields;
          const request: SignInData = {
            name: fields.name,
            password: fields.password,
          };
          dispatch(fetchLoginREST(request));
        }}
      >
        <Form.Item
          name={fieldNames.name}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name={fieldNames.password}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default Login;
