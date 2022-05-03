
import React from "react";
import FooterView from "./Footer.view";
import { FooterContext } from "./utils/context";

export default function FooterContainer() {
    const [count, setCount] = React.useState(1);
    return (
    <FooterContext.Provider
        value={{
        count: count,
        }}
    >
        <FooterView />
    </FooterContext.Provider>
    );
}
