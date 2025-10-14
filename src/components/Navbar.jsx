import cn from "../utils/cn";
import Logo from "./Logo";
import NavItems from "./NavItems"
import Container from "./Container";
import { Button } from "./ui/button";

export default function Navbar({className,containerClassName}){
    return(
        <>
            <nav className={
                cn(
                    "sticky top-0 z-50 bg-white shadow-md",
                    className
                )
            }>

            <Container className={cn(
                "flex-between w-full mx-auto py-3 ",
                containerClassName
            )}>
                <Logo className="text-black text-3xl font-extrabold  text-hover-to-pink" />
                <NavItems className="hidden lg:flex text-hover-to-pink font-medium text-[15.5px]" />
                <Button variant="hamburgerMenu" className="flex-center"
                size="icon">
                    <i className="bx bx-menu text-black text-3xl"></i>
                </Button>
            </Container>

            </nav>
        </>
    );
}