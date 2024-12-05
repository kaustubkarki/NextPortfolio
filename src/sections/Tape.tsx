import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Reliable",
  "Active Public Speaker",
  "Interactive Artist",
  "Creative",
  "Quick Learner",
  "responsive Designs",
  "Interactive",
  "Event management",
  "Performance oriented",
  "Analytical Problem Solver",
  "Innovative Thinker",
  "Collaborative Team Player",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* animate under this */}
          <div className="flex flex-none gap-4 pr-4 py-3 -translate-x-1/2 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  ``;
};
