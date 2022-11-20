import { FC, useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, Radio } from "antd";
import { CustomButton } from "../CustomButton";
import "./userDetails.css";
const { TextArea } = Input;

type RequiredMark = boolean | "optional";

export const UserDetails: FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className="user_details_section">
      <h2>Enter Detials</h2>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Name" required>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <CustomButton shape="round" label="Add Guest" />
        </Form.Item>
        <Form.Item label="Please share anything that will help prepare for our meeting.">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" shape="round" label="Schedule Event" />
        </Form.Item>
      </Form>
    </div>
  );
};
