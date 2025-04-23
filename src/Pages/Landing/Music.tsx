import Nature1 from "assets/img/nature-1.jpg";
import { ContentContainer } from "SharedComponents";

export const Music = () => {
  return (
    <ContentContainer style={{ backgroundImage: `url(${Nature1})` }}>
      <span className="text-3xl uppercase mb-12">Music</span>
      <div
        className="flex flex-col items-stretch md:flex-row gap-5 md:gap-12 justify-items-stretch w-full md:items-center justify-center px-2 md:px-36"
        style={{ minHeight: "600px" }}
      >
        <iframe
          className="rounded md:flex-1"
          height={550}
          src="https://open.spotify.com/embed/album/0AEaCeXJglnV0nlKX5tyzq?utm_source=generator"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="rounded md:flex-1"
          height={550}
          src="https://open.spotify.com/embed/album/7hy1oBxABVJ7frFxdSyFqK?utm_source=generator"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </ContentContainer>
  );
};
