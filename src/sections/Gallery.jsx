import ImageBentoGrid from "../components/ImageBentoGrid";
import Section from "../components/Section";

export default function Gallery(){
    return(
        <>
        <Section sectionId="gallery" title={true} sectionTitle="Gallery">
            <ImageBentoGrid />
        </Section>
        </>
    );
}