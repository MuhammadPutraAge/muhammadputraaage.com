import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full wrapper">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none">
          <p className="text-xl mb-2">Frontend Engineer</p>
          <h1 className="hero-title mb-6">
            Hello I&apos;m <br />{" "}
            <span className="text-accent">Muhammad Putra Age</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            sapiente eius tempora.
          </p>

          <div className="flex flex-col xl:flex-row gap-8 items-center">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload />
            </Button>

            <div className="mb-8 xl:mb-0">
              <Socials
                containerClassName="flex items-center gap-6"
                iconClassName="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Home;
