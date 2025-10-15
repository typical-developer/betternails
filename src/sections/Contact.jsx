import Section from "../components/Section";
import ContactForm from "../components/ContactForm"

export default function Contact(){
    const contactInformation = [
        {id: 1,
        label: <><span>RSU Backgate, Port Harcourt, Rivers State</span></>,
        icon:'bx bxs-phone'},

        {id: 2,
        label: <><a href="tel:07045942462">(+234) 7045-942-461</a></>,
        icon:'bx bxs-phone'},

        {id: 3,
        label: <><a href="https://wa.link/uwk3kd">Send a message</a></>,
        icon:'bx bxl-whatsapp'},
    ];

    const businessHours = [
        {id:1, 
        day: 'Monday - Friday',
        openHours: '9:00 AM to 7:00 PM'},

        {id:2, 
        day: 'Saturday',
        openHours: '10:00 AM to 5:00 PM'},
        
        {id:3, 
        day: 'Sunday',
        openHours: 'Closed'},
    ]


    return(
        <>
        <Section className="" sectionId="contact" title={true} sectionTitle="Contact & Location" sectionHeaderClassName="lg:top-5">
            <div className="lg:min-h-[100svh] space-y-8 lg:space-y-0 lg:flex-between max-w-[1000px] w-full">

                {/* content */}
                <div className="space-y-8">
                    <div>
                        <h4 className="mb-3 text-xl font-semibold text-black">Contact Information</h4>
                        <ul className="space-y-2">
                            {contactInformation.map(({id,label,icon}) => 
                                <li key={id} className="flex items-center gap-1.5 group">
                                    <i className={`${icon} text-pink-500 text-xl`}></i>
                                    <span className="group-hover:underline">{label}</span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-xl font-semibold text-black">Business Hours</h4>
                        <ul className="space-y-2">
                            {contactInformation.map(({id,label,icon}) => 
                                <li key={id} className="flex items-center gap-1.5 group">
                                    <i className={`${icon} text-pink-500 text-xl`}></i>
                                    <span className="group-hover:underline">{label}</span>
                                </li>
                            )}
                        </ul>                        
                    </div>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.349492365556!2d6.960064172744752!3d4.797956099635574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1dfe970848f%3A0x8ee0fc876f3ecb7e!2sRivers%20State%20University!5e0!3m2!1sen!2sng!4v1760444462541!5m2!1sen!2sng" className="rounded-md w-1/1 lg:w-md h-auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                {/* form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </Section>
        </>
    );
}