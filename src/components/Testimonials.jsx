import Section from "../components/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Testimonials() {

    //no need to add quotataions for each quote
    const testimonials = [
    {id: 1,
    clientName: "Amanda R.",
    quote: <>Betty is amazing! My nails have never looked better. The team’s attention to detail is unmatched, and the designs are always stunning. Highly recommend!</>},

    {id: 2,
    clientName: "Danielle K.",
    quote: <>I’m obsessed with my nails! Betty always delivers perfection every single time. Such a relaxing and professional experience.</>},

    {id: 3,
    clientName: "Maria L.",
    quote: <>Betty never disappoints. The quality, creativity, and service are top-tier. I always leave feeling confident and polished!</>},

    {id: 4,
    clientName: "Tiffany P.",
    quote: <>Hands down the best nail salon I’ve been to. Betty’s team really cares about their clients and it shows in their work.</>},

    {id: 5,
    clientName: "Rebecca N.",
    quote: <>From start to finish, Betty gives a flawless experience. My nails always turn out exactly how I want them.</>},

    {id: 6,
    clientName: "Julia T.",
    quote: <>I can’t recommend Betty enough! Beautiful space, talented staff, and long-lasting results every time.</>},

    ];


    return(
        <>
        <Section sectionId="testimonials" title={true} sectionTitle="Testimonials">
            <Carousel>
            <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </Section>
        </>
    );
}