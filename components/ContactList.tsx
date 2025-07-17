import { useState } from "react";
import MagneticWrapper from "./MagneticWrapper";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { handleMailClick } from "@/libs/helper";

export function ContactList() {
  const email = "poohwis.p@gmail.com";
  const telephoneNumber = "+66939109081";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (tel: string) => {
    navigator.clipboard.writeText(tel).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const SocialButton = ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    return (
      <MagneticWrapper pullRatio={0.2}>
        <button
          onClick={onClick}
          className="sm:flex sm:flex-row inline-flex gap-x-2 px-2 py-1 border-black 
            rounded-full  justify-center items-center 
           hover:bg-white 
            bg-black text-white hover:text-black transition hover:cursor-pointer"
        >
          {children}
        </button>
      </MagneticWrapper>
    );
  };
  return (
    <div
      className="sm:flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:gap-x-6 
           sm:items-center sm:mt-6 mt-2"
    >
      <SocialButton onClick={() => handleMailClick(email)}>
        <Mail size={16} />
        {email}
      </SocialButton>
      <SocialButton onClick={() => handleCopyClick(telephoneNumber)}>
        <Phone size={16} />
        {isCopied ? "Number copied" : "+6693 910 9081"}
      </SocialButton>
      <SocialButton>
        <Linkedin size={16} />
        <a target="_blank" rel="noopener noreferrer" href="https:linkedin.com/in/phuwis">
          linkedin
        </a>
      </SocialButton>
      <SocialButton>
        <Github size={16} />
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Poohwis">
          Github
        </a>
      </SocialButton>
    </div>
  );
}
