
import React, { useRef } from "react";
import ContactView from "./Contact.view";
import { ContactContext } from "./utils/context";
import emailjs from '@emailjs/browser';

export default function ContactContainer() {
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gdz1xfz', 'template_m28xm8s', form.current, '2VLI5QFe2mbZEvfeD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <ContactContext.Provider
            value={{
                onSubmit,form
            }}
        >
            <ContactView />
        </ContactContext.Provider>
    );
}
