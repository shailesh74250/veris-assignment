import { FC } from "react";
import "./card.css";

type Props = {
  children: JSX.Element;
};

export const Card: FC<Props> = ({ children }) => (
  <div className="card">{children}</div>
);
