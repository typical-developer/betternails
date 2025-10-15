import Section from "../components/Section";
import { Link } from "react-router-dom";

//Shad cn ui Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faq(){

    //No need to put a question mark at the end of each question
    const faqs = [
        {id: 1,
        itemValue: 'item-1',
        question: 'How do I book an appointment',
        answer: <>You can book an appointment directly through our website by clicking the "Book Now" button or by calling us at <Link className="text-pink-500" to="tel:07045942462">(+234) 7045-942-462</Link></>},

        {id: 2,
        itemValue: 'item-2',
        question: 'What are your cancellation policies',
        answer: <>We kindly ask for at least 24 hours notice if you need to cancel or reschedule your appointment.</>},

        {id: 3,
        itemValue: 'item-3',
        question: 'Do you offer group bookings',
        answer: <>Yes, we offer group bookings for special events. Please contact us for more details and to arrange a booking.</>},

        {id: 4,
        itemValue: 'item-4',
        question: 'What payment methods do you accept',
        answer: <>We accept cash, credit cards, and mobile payments for your convenience.</>},

        {id: 5,
        itemValue: 'item-5',
        question: 'What days are you open for work',
        answer: <>We are open Monday to Friday from 9:00 AM - 7:00 PM and Saturday 10:00 AM - 5:00 PM but exceptions are made for special occasions like wedding preparations.</>},
    ]

    return(
        <>
        <Section sectionId="faq" title={true} sectionTitle="Frequently Asked Questions" className="min-h-[50svh]">
        <Accordion type="single" collapsible className="space-y-4 lg:min-h-[100svh] flex-col flex item-center justify-center">
        {faqs.map(({id,itemValue,question,answer}) =>
            <AccordionItem key={id} value={itemValue}>
                <AccordionTrigger className="lg:min-w-[1000px] font-semibold text-lg">{question}?</AccordionTrigger>
                <AccordionContent className="text-base lg:max-w-[1000px] ring-b-pink-500">
                {answer}
                </AccordionContent>
            </AccordionItem>        
        )}
        </Accordion>
        </Section>
        </>
    );
};