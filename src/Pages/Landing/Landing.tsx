import { Contact } from "./Contact";
import { LandingVideo } from "./LandingVideo";
import { Shows } from "./Shows";
import { Music } from "Pages/Landing/Music";

export const Landing = () => {
  return (
    <div className="w-full h-full">
      <LandingVideo />
      <Shows />
      <Music />
      <Contact />
    </div>
  );
};
