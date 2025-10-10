import cn from "../utils/cn";

export default function ServiceCard(
    {className,
    serviceName = 'Service Name',
    desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgSrc,
    price = 50}
){
    return(
        <>
        <div className={cn(
            "px-6 py-8 shadow-md rounded-sm bg-white transition-shadow duration-150 ease-out hover:shadow-pink-400 flex-between gap-6",
            className
            )}>
            <img src={imgSrc} alt="" className="w-[100px] h-[100px] rounded-full" />

            <div className="space-y-2">
                <h4 className="text-lg font-semibold">{serviceName}</h4>
                <p className="text-sm">{desc}</p>
                <p className="font-bold text-base text-pink-500">₦ {price}</p>
            </div>
        </div>
        </>
    );
}
