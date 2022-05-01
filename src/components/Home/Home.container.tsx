
import React, { useRef } from "react";
import HomeView from "./Home.view";
import { HomeContext } from "./utils/context";

export default function HomeContainer() {
    const rotate = {
        hover: {
            transform: 'rotate(90deg)',
        }
    }
    return (
        <HomeContext.Provider
            value={{
                rotate
            }}
        >
            <HomeView />
        </HomeContext.Provider>
    );
}
