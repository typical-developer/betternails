import { Link } from "react-router";
import cn from "../utils/cn";
import { Button } from "./ui/button";

const navItems = [
    {id: 1, label: 'About', path: '#about'}, //0
    {id: 2, label: 'Services', path: '#services'}, //50
    {id: 3, label: 'Gallery', path: '#gallery'}, //100
    {id: 4, label: 'Testimonials', path: '#testimonials'}, //150
    {id: 5, label: 'Contact', path: '#contact'}, //200
    {id: 6, label: 'FAQ', path: '#faq'}, //250
]

//button delay will be - 300



export default function NavItems({className}){

    return(
        <>
        <ul className="flex-center gap-8">
            {navItems.map(({id,label,path}, delay) => 
                <li data-aos="fade-down" data-aos-delay={delay * 50} key={id} className={
                    cn(
                        className
                    )
                }>
                    {/* <Link to={path}>{label}</Link> */}
                    {/* Link would be used if the navitems go to different pages */}
                    <a href={path}>{label}</a>
                </li>
            )}
            <li data-aos="fade-down" data-aos-delay="300">
                <Button variant="solidPink">
                <i className="bx bx-pencil text-base"></i>
                Book Now
                </Button>
            </li>
        </ul>
        </>
    );    
}