"use client";

import {
  motion,
  useInView
} from "framer-motion";
import { useRef } from "react";

const RecentWorkHeading = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div id="projects" className="p-6 sm:p-12 md:p-20 text-white">
      <div className="relative text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "tween",
          }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold"
        >
          <motion.div>Recent Work</motion.div>
        </motion.div>
      </div>
      <div
        className="m-auto max-w-[90%] sm:max-w-[75%] md:max-w-[50%] text-center text-base sm:text-lg md:text-xl"
        style={{ lineHeight: "1.4" }}
      >
        THESE ARE SOME OF THE PROJECTS THAT I HAVE DONE IN RECENT YEARS, ALTHOUGH I
        CANNOT SHOW THE MOST RECENT ONES DUE TO CONFIDENTIALITY.
      </div>
    </div>
  );
};

export default RecentWorkHeading;
