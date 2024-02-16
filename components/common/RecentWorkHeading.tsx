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
    <div id="projects" className="h- p-20 text-white">
      <div className="relative h-full text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "tween",
          }}
          className="text-[10rem]"
        >
          <motion.div>Recent Work</motion.div>
        </motion.div>
      </div>
      <div className="m-auto w-1/2 text-center" style={{ lineHeight: "1" }}>
        THESE ARE SOME OF THE PROJECTS THAT I HAVE DONE IN RECENT YEARS,
        ALTHOUGH I CANNOT SHOW THE MOST RECENT ONES DUE TO CONFIDENTIALITY.
      </div>
    </div>
  );
};

export default RecentWorkHeading;
