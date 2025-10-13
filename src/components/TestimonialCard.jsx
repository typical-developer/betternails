import cn from "../utils/cn";

export default function TestimonialCard({
    className,
    clientName = "John Doe",
    username = "@johndoe",
    quote = "The is a long quote where i am meant to glaze the hell outta betty's nails as if the did threaten to slime me if I didn't",
    imgSrc,
}){
    return(
        <>
            <div className={cn(
                "px-6 py-8 shadow-md rounded-sm bg-white transition-shadow duration-150 ease-out hover:shadow-pink-400 flex-between gap-6",
                className
            )}>
                {clientName}
                {quote}
            </div>
        </>
    );
}