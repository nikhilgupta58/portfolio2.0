
import React from "react";
import ContactView from "./Contact.view";
import { ContactContext } from "./utils/context";

export default function ContactContainer() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const onSubmit = () => {

    }
    return (
        <ContactContext.Provider
            value={{
                onSubmit, name, setName, email, setEmail, message, setMessage
            }}
        >
            <ContactView />
        </ContactContext.Provider>
    );
}
