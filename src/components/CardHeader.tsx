import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div>
      <div className={twMerge(className, "flex flex-col p-6 md:py-8 md:px-10")}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-emerald-300 " />
          <h3 className="font-serif text-3xl ">{title}</h3>
        </div>
        <p className="text-sm lg:text-base  text-white/60 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};