import { LandingVideo } from "./LandingVideo";
import { Shows } from "../Shows/Shows";
import { Music } from "Pages/Music/Music";

export const Landing = () => {
  return (
    <div className="w-full h-full">
      <LandingVideo />
      <Shows />
      <Music />
    </div>
  );
};
