import { ReactNode } from "react";

export interface IconLink {
  link: string;
  icon: ReactNode;
}

export const IconLinkComponent = ({ link, icon }: IconLink) => {
  return (
    <a href={link} target="_blank" className="cursor-pointer">
      {icon}
    </a>
  );
};
