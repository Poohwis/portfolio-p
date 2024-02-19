export default function AboutPage() {
  const proto = () => <></>;
  return (
    <section
      id="about"
      className="z-10 flex justify-center  h-screen bg-black rounded-t-3xl"
    >
      <div
        className=" sm:w-[1500px] w-full
        h-screen mx-8 pt-10
         "
      >
        <div className="flex flex-row ">
          {/* name */}
          <div className="flex flex-col">
            <div className="text-white text-4xl sm:text-8xl  font-extrabold">
              Phuwis
            </div>
            <div className="text-white text-2xl sm:text-6xl font-extrabold">
              Phatthanaphirom
            </div>
            <div className="text-white text-sm sm:text-3xl font-extrabold">
              Full-stack developer
            </div>
          </div>

          {/* picture */}
          <div className="flex flex-col flex-1">
            <div
              className="sm:ml-8  ml-4 flex flex-1  
          sm:bg-red-500/15 rounded-2xl  justify-end items-center"
            >
              <div className="sm:hidden w-[100px] h-[100px] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 mt-4">
          <div />
          <div className=" flex sm:col-span-2  justify-center  sm:ml-7 ">
            <div className="sm:w-[82%] h-full bg-black">
              <p
                className=" sm:indent-8 indent-4 flex flex-1 
          text-white/60 sm:text-2xl  text-balance "
              >
                Former design engineer with 3 years of experience in commercial
                vehicle R&D. I have always been fascinated by the endless
                possibilities that complex problem-solving and innovative
                programming can provide. Now, I have decided to pursue an
                inspired career as a full-stack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
