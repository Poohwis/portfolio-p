"use client";
import ridingCar from "@/public/ridingcar.webp";
import office from "@/public/office.webp";
import SlideUpText from "./SlideUpText";
import newyork from "@/public/newyork.webp"
import ProjectComponent from "./ProjectComponent";
import liarsCard from "@/public/liarscard.webp"

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
        words={["Car rental platform", "React", "Front-end"]}
        videoSrc={"/videos/rent_and_go_demo.webm"}
        projectLink="https://nextjs-rentcar.vercel.app/"
        image={ridingCar}
      />
      <ProjectComponent
        header={"Taskmaster"}
        description={"Task management services"}
        words={["Drag & Drop Taskboard", "Authentication" , "CRUD & Database", "NextJs SSR"]}
        image={office}
        videoSrc="/videos/task_app_demo.webm"
        projectLink="https://taskmaster-demoproject.vercel.app/"
      />
      <ProjectComponent
        header={"Flag Quizzer"}
        description={"Flag quiz challenge"}
        words={[ "Explore Countries Through Flag Quiz","Gamified Geography", "API Driven Flag quiz",]}
        image={newyork}
        videoSrc="/videos/flag_quizzer_demo.webm"
        projectLink={"https://flagquizzer.vercel.app/"}
        verticalVdo
      />
      <ProjectComponent
        header={"Liar's Card"}
        description={"Multiplayer card game"}
        words={[ "React frontend","Go backend", "WebSocket communication", "Motion animations",]}
        image={liarsCard}
        videoSrc="/videos/liars_card_demo.webm"
        projectLink={"https://liars-card.vercel.app/"}
        verticalVdo
      />
    </section>
  );
}
