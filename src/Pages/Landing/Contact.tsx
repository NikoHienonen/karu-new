import { ContentContainer } from "SharedComponents";
import karuLive from "assets/img/karulive.jpg";
import { IconsBar } from "./IconsBar/IconsBar";

export const Contact = () => {
  return (
    <ContentContainer style={{ backgroundImage: `url(${karuLive})` }}>
      <span className="text-3xl uppercase mb-12">Contact</span>
      <div className="text-lg pb-5">
        <span>Business inquiries: </span>
        <a href="mailto:karubandofficial@gmail.com">
          karubandofficial(a)gmail.com
        </a>
      </div>
      <IconsBar />
    </ContentContainer>
  );
};
