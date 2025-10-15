import cn from "../utils/cn";
import Container from "./Container"; 
import SectionHeader from "./SectionHeader";

export default function Section({sectionId,className,containerClassName,sectionHeaderClassName,title = false,sectionTitle,children}) {
    return(
        <>
        {/* relative to keep bg image in place */}
        <section id={sectionId} className={cn(
            'relative lg:min-h-[100svh] py-8 lg:py-0',
            className
        )}>

            {/* When title is set to true it will render this section header */}
            {title && <SectionHeader sectionTitle={sectionTitle} className={cn(
                "top-8 lg:top-16",
                sectionHeaderClassName
            )} />}
             
             {/* mt-20 is to give space to the section headr on mobile */}
            <Container className={cn(
                "mt-20 lg:mt-0",
                containerClassName)}>

                    {/* This centers the content in each section */}
                    <div className="flex-center px-4">
                        {children}
                    </div>
            </Container>
        </section>
        </>
    );
}
