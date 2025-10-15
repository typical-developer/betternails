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

//client images
import client1 from "../assets/clients/girl-1.jpg"
import client2 from "../assets/clients/girl-2.jpg"
import client3 from "../assets/clients/girl-3.jpg"
import client4 from "../assets/clients/girl-4.jpg"
import client5 from "../assets/clients/girl-5.jpg"
import client6 from "../assets/clients/girl-6.jpg"

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
        profilePic: client1,
        quote: <>My nails have never looked better. The team’s attention to detail is unmatched, and the designs are always stunning.</>,
    },
    {
        id: 2,
        clientName: "Danielle King",
        username: "@dani_king",
        profilePic: client2,
        quote: <>I’m obsessed with my nails! Betty always delivers perfection every single time. Such a relaxing and professional experience.</>,
    },
    {
        id: 3,
        clientName: "Maria Lopez",
        username: "@maria_lopez",
        profilePic: client3,
        quote: <>Betty never disappoints. The quality, creativity, and service are top-tier. I always leave feeling confident and polished!</>,
    },
    {
        id: 4,
        clientName: "Tiffany Parker",
        username: "@tiffparker",
        profilePic: client4,
        quote: <>Hands down the best nail salon I’ve been to. Betty’s team really cares about their clients and it shows in their work.</>,
    },
    {
        id: 5,
        clientName: "Rebecca Nelson",
        username: "@rebecca_nelson",
        profilePic: client5,
        quote: <>From start to finish, Betty gives a flawless experience. My nails always turn out exactly how I want them.</>,
    },
    {
        id: 6,
        clientName: "Julia Thompson",
        username: "@juliathompson",
        profilePic: client6,
        quote: <>I can’t recommend Betty enough! Beautiful space, talented staff, and long-lasting results every time.</>,
    },
    ];

    return(
        <>
        <Section sectionId="testimonials" title={true} sectionTitle="Testimonials" className="h-auto">

            {/* wave bg */}
            <div className="absolute top-0 left-0 bottom-0 right-0 object-fill bg-cover bg-no-repeat bg-[url('./public/img/wave-bg.png')] lg:min-h-[100svh] opacity-5"></div>

            <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[1200px] lg:min-h-[100svh] lg:flex-center"
            >
            <CarouselContent className="-ml-0 flex gap-2">
                {testimonials.map(({id,clientName,username,profilePic,quote}) =>
                    <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <TestimonialCard
                            clientName={clientName}
                            username={username}
                            imgSrc={profilePic}
                            quote={quote}
                        />
                    </CarouselItem>
                )}

            </CarouselContent>
            <CarouselPrevious className="hidden lg:block size-10 text-black font-extrabold" />
            <CarouselNext className="hidden lg:block size-10 text-black font-extrabold" />
            </Carousel>
        </Section>
        </>
    );
}