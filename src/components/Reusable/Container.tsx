import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`${className} max-w-6xl mx-auto p-2 sm:p-4`}>{children}</div>;
};

export default Container;
