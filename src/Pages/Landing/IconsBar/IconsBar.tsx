import { FaInstagram, FaFacebook, FaSpotify, FaYoutube } from "react-icons/fa6";
import { IconLink, IconLinkComponent } from "./IconLink";

export const IconsBar = () => {
  const links: IconLink[] = [
    {
      link: "https://www.instagram.com/karu_band/",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.facebook.com/KARUbandofficial",
      icon: <FaFacebook />,
    },
    {
      link: "https://open.spotify.com/artist/2IKO2323Ur4oGwa1ouZ5Lr?si=lrn0snkrQFKvBHugrSWNOQ",
      icon: <FaSpotify />,
    },
    {
      link: "https://youtube.com/@karubandofficial?si=Fy0noG8ogcKZaRXu",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="flex gap-12 text-2xl">
      {links.map(({ link, icon }) => (
        <IconLinkComponent link={link} icon={icon} key={link} />
      ))}
    </div>
  );
};
