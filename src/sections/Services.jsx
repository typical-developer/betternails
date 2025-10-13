import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
    const numberOfCards = [1,2,3,4,5,6]
export default function Services() {

    const services = [
        {id: 1,
        serviceName: "Acrylic Nail Set",
        desc: "Full set of durable, customizable acrylic nails to achieve your desired length and shape.",
        imgSrc: './img/acrylic-nails.jpg',
        price: 4500},

        {id: 2,
        serviceName: "Gel Polish Maicures",
        desc: "Long-lasting gel polish application with proper nail prep for maximum durability and shine.",
        imgSrc: './img/gel-polish-manicure.jpg',
        price: 5000},

        {id: 3,
        serviceName: "Nail Art",
        desc: "Custom designs, from simple accents to elaborate artwork, tailored to your preferences.",
        imgSrc: './img/nail-art.jpg',
        price: 2500},

        {id: 4,
        serviceName: "Nail Repairs",
        desc: "Quick and effective repairs for broken or damaged nails to restore their appearance.",
        imgSrc: './img/nail-repairs.jpg',
        price: 2000},

        {id: 5,
        serviceName: "Pedicures",
        desc: "Relaxing foot treatment with exfoliation, massage, and polish application.",
        imgSrc: './img/pedicures.jpg',
        price: 2500},

        {id: 6,
        serviceName: "Crystal & 3D Nail Art",
        desc: "Premium nail art featuring crystals, charms, and 3D elements for special occasions.",
        imgSrc: './img/crystal-nail-art.jpg',
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