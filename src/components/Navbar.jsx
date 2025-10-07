import cn from "../utils/cn";
import Logo from "./Logo";
import NavItems from "./NavItems"

export default function Navbar({className}){
    return(
        <>
            <nav className={
                cn(
                    "flex-between custom-container py-3 sticky top-0 z-50 bg-white shadow-md",
                    className
                )
            }>
                <Logo className="text-black text-3xl font-extrabold  text-hover-to-pink" />
                <NavItems className="hidden lg:flex text-hover-to-pink font-medium text-[15.5px]" />
            </nav>
        </>
    );
}