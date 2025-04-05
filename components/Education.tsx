import { EDUCATION } from "@/constants";
import { ScrollArea } from "./ui/scroll-area";

const Education = () => {
  return (
    <div className="flex flex-col gap-7 text-center xl:text-left">
      <h3 className="text-3xl font-bold">{EDUCATION.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {EDUCATION.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {EDUCATION.items.map((item) => (
            <li
              key={item.institution}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <p className="text-accent ">{item.duration}</p>
              <h3 className="text-lg max-w-[260px] min-h-14 text-center lg:text-left">
                {item.degree}
              </h3>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
