import { format } from "date-fns";

import { shows } from "assets/data/shows";
import hydralandscape from "assets/img/hydra-landscape.jpg";

export const Shows = () => {
  return (
    <div
      className="flex gap-5 flex-col bg-center bg-cover text-white font-custom py-56 w-full justify-center items-center text-center"
      style={{ backgroundImage: `url(${hydralandscape})` }}
    >
      <span className="text-3xl uppercase mb-12">Shows</span>
      <ul className="md:text-xl">
        {shows.map(({ date, place }) => (
          <li
            key={`${place}-${date.toDateString()}`}
            className={`${date < new Date() ? "line-through" : ""}`}
          >{`${format(date, "dd.M.yy")} - ${place}`}</li>
        ))}
      </ul>
    </div>
  );
};
