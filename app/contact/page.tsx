import ContactContainer from "@/components/ContactContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { INFO } from "@/constants";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="wrapper">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="x:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 px-5 py-10 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Whether you need a new app, a platform upgrade, or a unique
                project built, I&apos;m here to help bring it to life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label htmlFor="name">
                  <p className="text-lg mb-1">Full Name</p>
                  <Input
                    type="text"
                    placeholder="ex., John Doe"
                    name="name"
                    className="w-full"
                  />
                </label>
                <label htmlFor="email">
                  <p className="text-lg mb-1">Email Address</p>
                  <Input
                    type="email"
                    placeholder="ex., john.doe@email.com"
                    name="name"
                    className="w-full"
                  />
                </label>
              </div>

              <label htmlFor="service">
                <p className="text-lg mb-1">Service</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ex., Web Development" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">
                        Mobile App Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>

              <label htmlFor="message">
                <p className="text-lg mb-1">Message</p>
                <Textarea
                  className="h-[200px]"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <Button size="md" className="max-w-40 self-end">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {INFO.map((info) => (
                <li key={info.title} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{info.title}</p>
                    <h3 className="text-lg">{info.value}</h3>
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
