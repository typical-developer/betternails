import { Link } from "react-router";
import cn from "../utils/cn";

const navItems = [
    {id: 1, label: 'About', path: '#about'},
    {id: 2, label: 'Services', path: '#services'},
    {id: 3, label: 'Gallery', path: '#gallery'},
    {id: 4, label: 'Testimonials', path: '#testimonials'},
    {id: 5, label: 'Contact', path: '#contact'},
    {id: 6, label: 'FAQ', path: '#faq'},
]

export default function NavItems({className}){
    return(
        <>
        <ul className="flex-center gap-6">
            {navItems.map(({id,label,path}) => 
                <li key={id} className={
                    cn(
                        className
                    )
                }>
                    <Link path={path}>{label}</Link>
                </li>
            )}
        </ul>
        </>
    );    
}