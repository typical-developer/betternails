import Section from "../components/Section";

export default function About(){

    const aboutParagraphs = [
        {id: 1, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
        {id: 2, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
        {id: 3, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit iusto quasi necessitatibus quia nisi quisquam dolorum illum odit inventore.'},
    ]
    return(
        <>
            <Section sectionId="#about" className="relative min-h-[100svh] flex items-center" containerClassName="px-0" >

                {/* zebra bg */}
                <div className="absolute top-0 left-0 bottom-0 right-0 object-fill bg-cover bg-no-repeat bg-[url('./img/zebra-bg.png')] min-h-[100svh] opacity-10"></div>


            </Section>
        </>
    );
};