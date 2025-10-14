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
            "relative lg:static px-6 py-6 lg:py-8 flex flex-col lg:flex-row lg:flex-between gap-6  shadow-md rounded-sm bg-white transition-shadow duration-150 ease-out hover:shadow-pink-400 ",
            className
            )}>
            <img src={imgSrc} alt="" className="w-[100px] h-[100px] rounded-full" />

            <div className="space-y-2">
                <h4 className="text-lg font-semibold">{serviceName}</h4>
                <p className="text-sm">{desc}</p>
                <p className="absolute lg:static right-15 top-15 font-bold text-xl lg:text-base text-pink-500">₦ {price}</p>
            </div>
        </div>
        </>
    );
}
