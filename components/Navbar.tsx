import Link from "next/link";
import MagneticWrapper from "./MagneticWrapper";
import { scrollToSection } from "@/libs/helper";

export default function Navbar() {

  const LinkComponent = (props: { title: string; link: string }) => {
    
    const { title, link } = props;
    return (
      <MagneticWrapper>
        <Link
          onClick={()=> scrollToSection(link.replace("/#",""))}
          href={link}
          className="sm:text-2xl text-lg  transition duration-500  font-normal 
        hover:cursor-pointer "
        >
          {title}
        </Link>
      </MagneticWrapper>
    );
  };

  return (
    <nav className="flex flex-col space-y-3 ">
      <LinkComponent title="About" link="/#about"  />
      <LinkComponent title="Skills" link="/#skills" />
      <LinkComponent title="Projects" link="/#projects" />
      <LinkComponent title="Contact" link="/#contact" />
    </nav>
  );
}
