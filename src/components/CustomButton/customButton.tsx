import { FC } from "react";
import { Button } from "antd";

type Props = {
  label?: string | undefined;
  type?:
    | "link"
    | "text"
    | "default"
    | "primary"
    | "ghost"
    | "dashed"
    | undefined;
  shape?: "circle" | "default" | "round" | undefined;
  outline: boolean;
};
export const CustomButton: FC<Props> = ({ label, type, shape, outline }) => (
  <Button type={type} shape={shape} className={`${outline'}`}>
    {label}
  </Button>
);
