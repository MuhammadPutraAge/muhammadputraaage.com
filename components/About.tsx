import { ABOUT } from "@/constants";

const About = () => {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="text-3xl font-bold">{ABOUT.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {ABOUT.description}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
        {ABOUT.info.map((item) => (
          <li
            key={item.fieldName}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-white/60 text-sm">{item.fieldName}</span>
            <span className="text-base">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
