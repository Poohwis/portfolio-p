"use client";
import womenDrivingTesla from "@/public/drivingtesla.jpg";
import office from "@/public/office.jpg"
import SlideUpText from "./SlideUpText";
import ProjectComponent from "./ProjectComponent";

export default function ProjectsSection() {
  return (
    <section id="projects" className="sm:my-36 my-20 pt-2 ">
      <SlideUpText
        text="projects"
        smScreenText="text-3xl"
        color="text-white/80"
        font="font-normal"
      />
      <ProjectComponent
        header={"Rent & Go"}
        description={"Transportation rent services"}
        words={["Showcase", "NextJs", "Front-end"]}
        image={womenDrivingTesla}
      />
      <ProjectComponent
        header={"Taskmaster"}
        description={"Task management services"}
        words={["Fullstack" , "Database", "NextJs"]}
        image={office}
        reverse
      />
    </section>
  );
}
