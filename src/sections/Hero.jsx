import Section from "../components/Section";
import { Button } from "../components/ui/button";
import bgVideo from "../assets/backgrounds/bg-vid.mp4"

export default function Hero() {
  return (
    <>
    <Section sectionId="#hero" className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full space-y-2">
        <h1 data-aos="fade-up" data-aos-delay="50" className="text-6xl lg:text-[min(8vw,125px)] font-logo font-bold overflow-hidden py-4">Nails By Betty</h1>
        <p className="text-lg max-w-md mx-auto">
            Experience luxury nail care that enhances your beauty and restores your confidence.
        </p>
        <Button variant="solidPink" className="mt-4 transition-color border border-transparent hover:border-white">
        <i className="bx bx-pencil text-base"></i>
        Book Now
        </Button>
        
        </div>
    </Section>
    </>
  );
}
