
import React from "react";
import PortfolioView from "./Portfolio.view";
import { PortfolioContext } from "./utils/context";

export default function PortfolioContainer() {
    return (
    <PortfolioContext.Provider
        value={{
        }}
    >
        <PortfolioView />
    </PortfolioContext.Provider>
    );
}
