import cn from "../utils/cn";
import Container from "./Container"; 

export default function Section({sectionId,className,containerClassName,children}) {
    return(
        <>
        <section id={sectionId} className={cn(
            className
        )}>
            <Container className={cn(
                containerClassName)}>
                {children}
            </Container>
        </section>
        </>
    );
}