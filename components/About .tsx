'use client'
import AboutList from "./AboutList";
import SlideUpText from "./SlideUpText";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="z-10 flex justify-center  h-screen bg-stone-800 rounded-t-3xl"
    >
      <div
        className=" sm:w-[1500px] w-full
        h-screen mx-8 pt-10
         "
      >
        {/* <h1 className="text-stroke text-white font-extrabold text-3xl sm:text-8xl sm:text-end text-start">
          ABOUT ME
        </h1> */}
        <div className="sm:text-end text-start   ">
        <SlideUpText text="ABOUT ME"  smScreenText="text-3xl" font="font-[900]" color="text-white"  />
        </div>
        <div className="flex flex-row mt-2">
          {/* name */}
          <div className="flex flex-col text-white/80 font-extrabold">
            <h2 className="text-2xl sm:text-8xl  ">Phuwis</h2>
            <h2 className=" text-2xl sm:text-6xl ">Phatthanaphirom</h2>
            <h3 className=" text-sm sm:text-2xl ">Full-stack developer</h3>
          </div>

          {/* picture */}
          <div className="flex flex-col flex-1">
            <div className="sm:ml-8 ml-4 flex flex-1 sm:bg-red-500/15 rounded-2xl  justify-end items-center">
              <div className="sm:hidden w-[100px] h-[100px] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 mt-4 gap-8 ">
          <AboutList />
          <div className="sm:pl-10 sm:pt-0 pt-12">
            <p
              className=" sm:indent-8 indent-4 flex flex-1 
          text-white/60 sm:text-2xl  text-balance "
            >
              Former design engineer with 3 years of experience in commercial
              vehicle R&D. I have always been fascinated by the endless
              possibilities that complex problem-solving and innovative
              programming can provide. Now, I have decided to pursue an inspired
              career as a full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
