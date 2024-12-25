"use client";
import ridingCar from "@/public/ridingcar.webp"
import office from "@/public/office.webp"
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
        videoSrc={"/videos/rent_and_go_demo.mp4"}
        projectLink="https://nextjs-rentcar.vercel.app/"
        image={ridingCar}
      />
      <ProjectComponent
        header={"Taskmaster"}
        description={"Task management services"}
        words={["Fullstack" , "Database", "NextJs"]}
        image={office}
        videoSrc="/videos/task_app_demo.mp4"
        projectLink="https://taskmaster-demoproject.vercel.app/"
        reverse
      />
    </section>
  );
}
