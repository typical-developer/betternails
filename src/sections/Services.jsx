import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";

//services images
import acrylicNails from "../assets/service-img/acrylic-nails.jpg"
import gelPolish from "../assets/service-img/gel-polish-manicure.jpg"
import nailArt from "../assets/service-img/nail-art.jpg"
import nailRepairs from "../assets/service-img/nail-repairs.jpg"
import pedicures from "../assets/service-img/pedicures.jpg"
import crystalNailArt from "../assets/service-img/crystal-nail-art.jpg"

//shadcb
import { Skeleton } from "@/components/ui/skeleton"

export default function Services() {
    const services = [
        {id: 1,
        serviceName: "Acrylic Nail Set",
        desc: "Full set of durable, customizable acrylic nails to achieve your desired length and shape.",
        imgSrc: acrylicNails,
        price: 4500},

        {id: 2,
        serviceName: "Gel Polish Maicures",
        desc: "Long-lasting gel polish application with proper nail prep for maximum durability and shine.",
        imgSrc: gelPolish,
        price: 5000},

        {id: 3,
        serviceName: "Nail Art",
        desc: "Custom designs, from simple accents to elaborate artwork, tailored to your preferences.",
        imgSrc: nailArt,
        price: 2500},

        {id: 4,
        serviceName: "Nail Repairs",
        desc: "Quick and effective repairs for broken or damaged nails to restore their appearance.",
        imgSrc: nailRepairs,
        price: 2000},

        {id: 5,
        serviceName: "Pedicures",
        desc: "Relaxing foot treatment with exfoliation, massage, and polish application.",
        imgSrc: pedicures,
        price: 2500},

        {id: 6,
        serviceName: "Crystal & 3D Nail Art",
        desc: "Premium nail art featuring crystals, charms, and 3D elements for special occasions.",
        imgSrc: crystalNailArt,
        price: 3500},
    ]

    return(
        <>
        <Section className="bg-pink-50" sectionId="services" title={true} sectionTitle="Our Services">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {services.map(({id,serviceName,desc,imgSrc,price},delay = 0) => 
                        <ServiceCard 
                            data-aos="fade-up"
                            data-aos-delay={delay * 50}
                            key={id} 
                            serviceName={serviceName}
                            imgSrc={imgSrc} 
                            desc={desc}
                            price={price} />
                    )}
            </div>
                    
        </Section>
        </>
    );
}