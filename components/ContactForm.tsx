"use client";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast("Thank you for your message 😃", {
        style: {
          backgroundColor: "#1c1c22",
          color: "#ffffff",
          borderColor: "#f97316",
        },
      });

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error(error);
      toast("I didn't receive your message 😢, Please try again.", {
        style: {
          backgroundColor: "#1c1c22",
          color: "#ffffff",
          borderColor: "#f97316",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 px-5 py-10 md:p-10 bg-[#27272c] rounded-xl"
    >
      <h3 className="text-3xl text-accent">Let&apos;s work together</h3>
      <p className="text-white/60">
        Whether you need a new app, a platform upgrade, or a unique project
        built, I&apos;m here to help bring it to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label htmlFor="name">
          <p className="text-lg mb-1">Full Name</p>
          <Input
            type="text"
            placeholder="ex., John Doe"
            name="name"
            className="w-full"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <p className="text-lg mb-1">Email Address</p>
          <Input
            type="email"
            placeholder="ex., john.doe@email.com"
            name="email"
            className="w-full"
            value={form.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <label htmlFor="service">
        <p className="text-lg mb-1">Service</p>
        <Select onValueChange={handleServiceChange} value={form.service}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="ex., Web Development" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Mobile App Development">
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
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <Button type="submit" size="md" className="max-w-40 self-end">
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
