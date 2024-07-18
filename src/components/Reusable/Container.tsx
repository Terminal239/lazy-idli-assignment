import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Container;
