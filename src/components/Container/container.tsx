import { FC } from 'react';
import './container.css';

type Props = {
  children: JSX.Element;
};

export const Container: FC<Props> = ({ children }) => <div className="container">{children}</div>;
