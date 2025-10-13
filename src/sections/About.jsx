import Section from "../components/Section";
import aboutBettyImage from "../assets/about-img/about.jpg"

export default function About(){

    const aboutParagraphs = [
        {id: 1, content: "With over 2 years of experience in the nail industry, Betty has established herself as one of the most skilled and creative nail technicians in the area. Certified in advanced nail techniques and dedicated to ongoing education in the latest trends."},
        {id: 2, content: "Betty takes pride in providing a personalized experience for each client, ensuring that your nails don't just look beautiful, but remain healthy too. Her attention to detail and commitment to hygiene have earned her a loyal client base who trust her with their nail care needs."},
        {id: 3, content: "Whether you're looking for elegant, everyday nails or show-stopping designs for a special occasion, Betty's artistic flair and technical expertise will exceed your expectations."},
    ]


    return(
        <>
            <Section sectionId="about" className="" containerClassName="lg:px-0" title={true} sectionTitle="About Betty">

                {/* zebra bg */}
                <div className="absolute top-0 left-0 bottom-0 right-0 object-fill bg-cover bg-no-repeat bg-[url('./img/zebra-bg.png')] min-h-[100svh] opacity-10"></div>

                {/* about content */}
                <div className="absolute top-0 left-0 bottom-0 right-0  flex-center w-full">
                    <div className="absolute max-w-[1200px] lg:flex-between gap-20 px-4 lg:px-0 space-y-12">
                        {/* about image */}
                        <img src={aboutBettyImage} alt="about nails by betty" className="w-[350px] h-[350px] rounded-full"  />

                        {/* about paragraphs */}
                        <div className="lg:max-w-xl space-y-4">
                            {aboutParagraphs.map(({id,content},delay) => 
                                <p data-aos="fade-left" data-aos-delay={delay * 50} key={id} >{content}</p>
                            )}
                        </div>
                    </div>                    
                </div>

            </Section>
        </>
    );
};