"use client";

import RecentWorkHeading from "@/components/common/RecentWorkHeading";
import seed from "@/helpers/seed.json";
import useSticky from "@/hooks/useSticky";
import { useRef } from "react";

const RecentWork = () => {
  const {
    recentWorkSection: { title, work },
  } = seed;

  const childRef = useRef<HTMLDivElement>(null);
  const [isSticky, top] = useSticky(childRef);

  return (
    <div
  style={{ position: isSticky ? "sticky" : "relative", top: -top }}
  ref={childRef}
  className="-mt-[3rem] sm:-mt-[5rem] min-h-full w-full rounded-t-[3rem] sm:rounded-t-[5rem] bg-primary p-6 sm:p-12 md:p-20 text-white"
>
  <RecentWorkHeading />
  <div className="mt-5 w-full flex flex-col items-center">
    {work.map((w, i) => (
      <ProjectCard key={i} {...w} />
    ))}
  </div>
</div>
  );
};

export default RecentWork;

const ProjectCard = ({
  title,
  subTitle,
  imgSrc,
  href,
}: {
  title: string;
  subTitle: string;
  imgSrc: string;
  href: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-10 w-full overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
        <img
          className="w-full object-cover transition duration-1000 ease-in-out hover:scale-110"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="my-5 sm:my-7 w-full space-y-2 sm:space-y-3">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</p>
        <p className="text-sm sm:text-lg font-semibold">✦ {subTitle.toUpperCase()}</p>
      </div>
    </div>

  );
};
