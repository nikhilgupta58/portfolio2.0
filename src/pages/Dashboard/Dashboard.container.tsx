import React from "react";
import DashboardView from "./Dashboard.view";
import { DashboardContext } from "./utils/context";

export default function DashboardContainer() {
    return (
    <DashboardContext.Provider
        value={{
        }}
    >
        <DashboardView />
    </DashboardContext.Provider>
    );
}
