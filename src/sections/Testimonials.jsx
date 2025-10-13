import Section from "../components/Section";
import TestimonialCard from "../components/TestimonialCard";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Testimonials() {
    const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    //no need to add quotataions for each quote
    const testimonials = [
    {
        id: 1,
        clientName: "Amanda Roberts",
        username: "@amandaroberts",
        quote: <>Betty is amazing! My nails have never looked better. The team’s attention to detail is unmatched, and the designs are always stunning. Highly recommend!</>,
    },
    {
        id: 2,
        clientName: "Danielle King",
        username: "@dani_king",
        quote: <>I’m obsessed with my nails! Betty always delivers perfection every single time. Such a relaxing and professional experience.</>,
    },
    {
        id: 3,
        clientName: "Maria Lopez",
        username: "@maria_lopez",
        quote: <>Betty never disappoints. The quality, creativity, and service are top-tier. I always leave feeling confident and polished!</>,
    },
    {
        id: 4,
        clientName: "Tiffany Parker",
        username: "@tiffparker",
        quote: <>Hands down the best nail salon I’ve been to. Betty’s team really cares about their clients and it shows in their work.</>,
    },
    {
        id: 5,
        clientName: "Rebecca Nelson",
        username: "@rebecca_nelson",
        quote: <>From start to finish, Betty gives a flawless experience. My nails always turn out exactly how I want them.</>,
    },
    {
        id: 6,
        clientName: "Julia Thompson",
        username: "@juliathompson",
        quote: <>I can’t recommend Betty enough! Beautiful space, talented staff, and long-lasting results every time.</>,
    },
    ];

    return(
        <>
        <Section sectionId="testimonials" title={true} sectionTitle="Testimonials">
            <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[1200px]"
            >
            <CarouselContent className="-ml-0">
                {testimonials.map(({id,username}) => (
                <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <TestimonialCard />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="size-10 text-pink-500 font-extrabold" />
            <CarouselNext className="size-10 text-pink-500 font-extrabold" />
            </Carousel>
        </Section>
        </>
    );
}