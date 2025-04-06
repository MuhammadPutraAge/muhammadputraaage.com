import ContactContainer from "@/components/ContactContainer";
import ContactForm from "@/components/ContactForm";
import { INFO } from "@/constants";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="wrapper">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="x:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col lg:flex-row xl:flex-col gap-10">
              {INFO.map((info) => (
                <li key={info.title} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{info.title}</p>
                    <h3 className="text-sm xl:text-lg">{info.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
