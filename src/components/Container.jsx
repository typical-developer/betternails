import cn from "../utils/cn";

export default function Container({className,children}) {
    return(
        <>
            <div className={
                cn(
                    "custom-container",
                    {className}
                )
            }>
                {children}
            </div>
        </>
    );   
}