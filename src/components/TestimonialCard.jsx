import cn from "../utils/cn";

export default function TestimonialCard({
    className,
    clientName = "Jane Doe",
    username = "@johndoe",
    quote = "The is a long quote where i am meant to glaze the hell outta betty's nails as if the did threaten to slime me if I didn't",
    imgSrc,
    imgAlt = "jane Doe",
}){
    return(
        <>
            <div className={cn(
                "relative flex flex-col px-8 py-10 shadow-lg rounded-sm bg-white transition-shadow duration-150 ease-out border-b-4 border-b-pink-300  gap-4",
                className
            )}>


                <div className="flex items-center gap-6">
                    <img src={imgSrc} alt={imgAlt} className="w-[60px] h-[60px] rounded-full aspect-square"/>

                    <div className="flex flex-col">
                        <p className="font-semibold text-base">{clientName}</p>
                        <p className="font-normal text-sm text-gray-800">{username}</p>
                    </div>
                </div>
                
                <div>
                    <p className="text-sm">"<i>{quote}</i>"</p>
                </div>
            </div>
        </>
    );
}