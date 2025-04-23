import { CSSProperties, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
}

export const ContentContainer = ({ children, style }: Props) => {
  return (
    <div
      className="flex gap-5 flex-col bg-center bg-cover text-white font-custom py-56 w-full justify-center items-center text-center"
      style={style}
    >
      {children}
    </div>
  );
};
