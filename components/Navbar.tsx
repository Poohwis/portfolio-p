import Link from "next/link";
import MagneticWrapper from "./MagneticWrapper";

export default function Navbar() {

  const LinkComponent = (props: { title: string; link: string }) => {

    const scrollToSection = (id : string)=> {
      const rect = document.getElementById(id)?.getBoundingClientRect()
      if (rect !== undefined){
      window.scrollTo({top: rect.top, behavior: "smooth"})
      }
    }
    
    const { title, link } = props;
    return (
      <MagneticWrapper>
        <Link
          onClick={()=> scrollToSection(link.replace("/#",""))}
          href={link}
          className="sm:text-2xl text-lg  transition duration-500  font-semibold 
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
