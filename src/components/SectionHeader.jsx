export default function SectionHeader({label}){
    return(
        <>
        <h2 data-aos="fade-right" className="absolute border-l-4 border-l-pink-500  bg-white shadow-md z-[49] py-4 px-6 text-lg font-semibold top-25 left-4 flex-center">
            {label}
        </h2>
        </>
    );
}