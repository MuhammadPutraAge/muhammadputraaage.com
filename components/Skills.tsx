import { SKILLS } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Skills = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-7 text-center xl:text-left">
        <h3 className="text-3xl font-bold">{SKILLS.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {SKILLS.description}
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7">
        {SKILLS.items.map((item) => (
          <li key={item.name}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
