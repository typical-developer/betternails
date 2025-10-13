import cn from "../utils/cn";
import Container from "./Container"; 
import SectionHeader from "./SectionHeader";

export default function Section({sectionId,className,containerClassName,sectionHeaderClassName,title = false,sectionTitle,children}) {
    return(
        <>
        <section id={sectionId} className={cn(
            'relative min-h-[100svh]',
            className
        )}>

            {/* When title is set to true it will render this section header */}
            {title && <SectionHeader sectionTitle={sectionTitle} className={cn(
                sectionHeaderClassName
            )} />}
             
            <Container className={cn(
                containerClassName)}>

                    {/* This centers the content in each section */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex-center px-4">
                        {children}
                    </div>

            </Container>
        </section>
        </>
    );
}
