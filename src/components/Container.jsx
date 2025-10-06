import cn from "../utils/cn";

export default function Container(className) {
    return(
        <>
        div.{cn(
            "custom-container",
            className
        )}
        </>
    );   
}