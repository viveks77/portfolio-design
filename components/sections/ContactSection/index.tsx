import seed from "@/helpers/seed.json";

const ContactSection = () => {
  const {
    contactSection: { title, socials, email },
  } = seed;
  return (
    <div
      id="contact"
      className="min-h-full w-full bg-default px-6 sm:px-16 pt-10 text-foreground-secondary"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-10 sm:space-y-0">
        <div className="w-full sm:w-1/2 text-3xl sm:text-5xl md:text-[5rem]" style={{ lineHeight: "1" }}>
          Tell me something cool or just troll me.
        </div>
        <div className="flex flex-col space-y-3 text-right text-2xl sm:text-3xl underline">
          {socials.map((s, i) => (
            <a href={s.href} key={i} target="_blank">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 sm:mt-[10rem] flex w-full overflow-hidden whitespace-nowrap text-5xl sm:text-7xl md:text-[8rem] uppercase">
        <div className="marquee">
          <div className="marquee-content space-x-10">
            <span>{email}</span>
            <span>{email}</span>
            <span>{email}</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
