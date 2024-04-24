import MagneticWrapper from "./MagneticWrapper";
import CapsuleWrapper from "./CapsuleWrapper";

export default function AboutList() {
  const labels = [
    "KMITL - BEng Mechatronics",
    "Vehicle design engineer",
    "Self-taught programmer",
    "Meta Front-End Cert.",
    "Meta Back-End Cert.",
    "Meta React Native Cert.",
    "Tech aficionado",
    "Based in Bangkok",
    "Enjoy musics and movies",
    "Noodles lover",
  ];

  return (
    <div className="flex sm:items-end ">
      <div
        className="flex 
        sm:flex-wrap 
        sm:justify-center sm:items-center 
        sm:px-4 px-6
        sm:gap-x-4 gap-x-2 
        sm:gap-y-3 
        no-scrollbar 
        left-0  w-screen 
        overflow-x-scroll sm:overflow-x-hidden
        sm:static fixed 
        sm:py-2 py-1
         hover:cursor-default"
      >
        {labels.map((label, index) => {
          return (
            <MagneticWrapper pullRatio={0.2} key={index}>
              <CapsuleWrapper >
                <p>{label}</p>
              </CapsuleWrapper>
            </MagneticWrapper>
          );
        })}
      </div>
    </div>
  );
}
