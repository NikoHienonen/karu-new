import { format } from "date-fns";

import { shows } from "assets/data/shows";
import hydralandscape from "assets/img/hydra-landscape.jpg";
import { ContentContainer } from "SharedComponents";

export const Shows = () => {
  return (
    <ContentContainer style={{ backgroundImage: `url(${hydralandscape})` }}>
      <span className="text-3xl uppercase mb-12">Shows</span>
      <ul className="md:text-xl">
        {shows.map(({ date, place }) => (
          <li
            key={`${place}-${date.toDateString()}`}
            className={`${date < new Date() ? "line-through" : ""}`}
          >{`${format(date, "dd.M.yy")} - ${place}`}</li>
        ))}
      </ul>
    </ContentContainer>
  );
};
