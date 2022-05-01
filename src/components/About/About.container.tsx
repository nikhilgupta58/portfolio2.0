
import React from "react";
import AboutView from "./About.view";
import { AboutContext } from "./utils/context";

export default function AboutContainer() {
    
    return (
    <AboutContext.Provider
        value={{
        }}
    >
        <AboutView />
    </AboutContext.Provider>
    );
}
