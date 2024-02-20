import MagneticWrapper from "./MagneticWrapper";

export default function AboutList() {
  const labels = [
    "BEng — Mechatronics",
    "Design engineer",
    "Self-taught programmer",
    "Tech aficionado",
    "Based in Bangkok",
    "Enjoy musics and movies",
    "Noodles lover",
  ];
  const ListPill = ({ label }: { label: string }) => {
    return (
      <MagneticWrapper pullRatio={0.2}>
        <div
          className="sm:text-base text-sm font-thin text-white/60 bg-transparent 
        border-white/60 border-[1px] px-2 py-1 rounded-full text-nowrap"
        >
          {label}
        </div>
      </MagneticWrapper>
    );
  };
  return (
    <div className="flex sm:items-end ">
      <div
        className="flex 
        sm:flex-wrap
        sm:justify-center sm:items-center 
        sm:px-0 px-8
        sm:gap-x-4 gap-x-2 
        sm:gap-y-3 
        no-scrollbar 
        left-0  w-screen 
        overflow-x-scroll sm:overflow-x-hidden
        sm:static fixed 
        sm:py-5 sm:translate-y-2 hover:cursor-default
        "
      >
        {labels.map((label, index) => (
          <ListPill key={index} label={label} />
        ))}
      </div>
    </div>
  );
}
