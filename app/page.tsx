import About from "@/components/About ";
import Home from "@/components/Home";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <>
      <SmoothScroll>
        <Home />
        <About />
      </SmoothScroll>
    </>
  );
}
