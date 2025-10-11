import cn from "../utils/cn";
import Container from "./Container"; 
import SectionHeader from "./SectionHeader";

export default function Section({sectionId,className,containerClassName,sectionHeaderClassName,sectionTitle,children}) {
    return(
        <>
        <section id={sectionId} className={cn(
            'relative min-h-[100svh]',
            className
        )}>

            <SectionHeader label={sectionTitle} className={cn(
                sectionHeaderClassName
            )} />
             
            <Container className={cn(
                containerClassName)}>
                {children}
            </Container>
        </section>
        </>
    );
}