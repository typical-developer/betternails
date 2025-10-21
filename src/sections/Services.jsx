import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";

import { servicesList } from "../utils/servicesList";

export default function Services() {

    return(
        <>
        <Section className="bg-white" containerClassName="lg:flex-center lg:min-h-[100svh]" sectionId="services" title={true} sectionTitle="Our Services">

                <div className="mt-10 lg:mt-0 max-w-[1400px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {servicesList.map(({id,serviceName,desc,imgSrc,price},delay = 0) => 
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