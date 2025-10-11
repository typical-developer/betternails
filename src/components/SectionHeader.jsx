import cn from "../utils/cn";

export default function SectionHeader({className,sectionTitle = 'Section Title'}){
    return(
        <>
        <h2 data-aos="fade-right" className={cn(
            "absolute border-l-4 border-l-pink-500  bg-white shadow-md z-[49] py-4 px-6 text-xl font-semibold top-25 left-4 flex-center",
            className
            )}>
            {sectionTitle}
        </h2>
        </>
    );
}