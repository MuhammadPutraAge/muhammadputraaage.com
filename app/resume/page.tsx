"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ResumeContainer from "@/components/ResumeContainer";
import Skills from "@/components/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  return (
    <ResumeContainer>
      <div className="wrapper w-full">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about-me">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <Skills />
            </TabsContent>

            <TabsContent
              value="about-me"
              className="w-full text-center xl:text-left"
            >
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ResumeContainer>
  );
};

export default Resume;
