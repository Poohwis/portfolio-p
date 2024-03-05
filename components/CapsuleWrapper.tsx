interface RoundedWrapperProps {
  children: React.ReactNode;
}
export default function CapsuleWrapper({ children }: RoundedWrapperProps) {
  return (
    <div
      className="
      rounded-full
      border-white/60 border-[1px]
      text-white/60 -z-10 hover:text-white 
      hover:bg-primary
      hover:border-primary
      bg-transparent
       transition 
      px-4 py-1
      sm:text-base text-sm font-normal
      hover:cursor-default
      text-nowrap"
    >
      {children}
    </div>
  );
}
