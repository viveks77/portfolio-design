import seed from "@/helpers/seed.json";

const ContactSection = () => {
  const {
    contactSection: { title, socials, email },
  } = seed;
  return (
    <div
      id="contact"
      className="min-h-full w-full bg-default px-16 pt-10 text-foreground-secondary"
    >
      <div className="flex items-center justify-between">
        <div className="w-1/2 text-[5rem]" style={{ lineHeight: "1" }}>
          Tell me something cool or just troll me.
        </div>
        <div className="flex flex-col space-y-3 text-right text-3xl underline">
          {socials.map((s, i) => (
            <a href={s.href} key={i} target="_blank">
              {s.title}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-[10rem] flex w-full items-center justify-start whitespace-nowrap text-[8rem] uppercase">
        <div className="marque space-x-1">
          <span className="">{email} </span>
          <span className="">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
