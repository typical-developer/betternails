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
            <Section sectionId="about" className="px-0" containerClassName="px-0" title={true} sectionTitle="About Betty">

                {/* zebra bg */}
                <div className="absolute top-0 left-0 bottom-0 right-0 object-fill bg-cover bg-no-repeat bg-[url('./img/zebra-bg.png')] min-h-[100svh] opacity-9"></div>

                {/* about content */}
                {/* absolute top-0 left-0 bottom-0 right-0  */} {/* this centers the content by making the w as big as the section then flexing it center */}
                <div className="flex-center w-full lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:right-0">

                    {/* absolute */}
                    <div className="space-y-5 lg:space-y-12 lg:max-w-[1200px] lg:flex-between gap-20 py-8 px-0">

                        <div className="flex-center">
                        {/* about image */}
                        <img src={aboutBettyImage} alt="about nails by betty" className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full"  />
                        </div>

                        {/* about paragraphs */}
                        <div data-aos="fade-left" data-aos-offset="120" className="max-w-xl space-y-4 bg-white py-10 px-8 rounded-md shadow-md">
                            {aboutParagraphs.map(({id,content}) => 
                                <p key={id} >{content}</p>
                            )}
                        </div>
                    </div>                    
                </div>

            </Section>
        </>
    );
};