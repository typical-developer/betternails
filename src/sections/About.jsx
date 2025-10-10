import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

export default function About(){

    const aboutParagraphs = [
        {id: 1, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
        {id: 2, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
        {id: 3, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
    ]
    return(
        <>
            <Section sectionId="about" className="relative min-h-[100svh]" containerClassName="lg:px-0" >

                <SectionHeader label="About Betty" />

                {/* zebra bg */}
                <div className="absolute top-0 left-0 bottom-0 right-0 object-fill bg-cover bg-no-repeat bg-[url('./img/zebra-bg.png')] min-h-[100svh] opacity-7"></div>

                {/* about content */}
                <div className="absolute top-0 left-0 bottom-0 right-0  flex-center w-full">
                    <div className="absolute lg:flex-between gap-20 px-4 lg:px-0 space-y-10">
                        {/* about image */}
                        <img src="./img/about.jpg" alt="about nails by betty" className="w-[350px] h-[350px] rounded-full"  />

                        {/* about paragraphs */}
                        <div className="lg:max-w-lg space-y-4">
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