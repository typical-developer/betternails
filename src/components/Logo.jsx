import cn from "../utils/cn";
import { Link } from "react-router-dom";

export default function Logo({className}){
    return(
        <Link className={
            cn(
                "font-logo",
                className
            )
        }>
            Nails By Betty
        </Link>
    )
}
