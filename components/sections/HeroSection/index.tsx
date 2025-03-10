import seed from "@/helpers/seed.json";
import { MotionDiv, MotionH1, MotionP } from "@components/common/Motion";

const HeroSection = () => {
  const {
    heroSection: { title, subTitle },
  } = seed;

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="sticky top-0 h-screen w-full">
      <div className="flex h-screen w-full flex-col items-start justify-between px-8 md:px-12 lg:px-16 pb-10 pt-20">
        <div className="w-full">
          <MotionH1
            initial="initial"
            animate="animate"
            variants={variants}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold leading-tight"
          >
            <MotionP variants={variants}>I&apos;m {title}</MotionP>
            <MotionP variants={variants}>Portfolio 23</MotionP>
          </MotionH1>
        </div>
        <div className="mb-[2%] flex flex-col md:flex-row w-full items-start justify-between gap-6">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full md:w-1/2 space-y-4 md:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold">{subTitle}</h3>
          </MotionDiv>
          <div
          style={{lineHeight: 1}}
            className="w-full md:w-1/2 text-2xl sm:text-3xl md:text-[3.666rem] leading-snug"
          >
            <MotionP initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              ✺Here you can see
              <br />
              some of my latest
              <br />
              gadgets and projects
            </MotionP>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
