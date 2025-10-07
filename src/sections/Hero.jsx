import Container from "../components/Container";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="mt-10">
      <Container className="relative w-full h-screen overflow-hidden ">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          
          <source src="/videos/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
        <h1 data-aos="fade-up" data-aos-delay="50" className="text-[min(8vw,125px)] font-bold overflow-hidden"><Logo /></h1>
        <p className="text-lg max-w-md mx-auto">
            Experience luxury nail care that enhances your beauty and restores your confidence.
        </p>
        <Button variant="solidPink" className="mt-4 transition-color border border-transparent hover:border-white">
        <i className="bx bx-pencil text-base"></i>
        Book Now
        </Button>
        
        </div>

      </Container>
    </section>
  );
}
