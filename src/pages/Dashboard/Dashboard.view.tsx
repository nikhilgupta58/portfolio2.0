import { Flex } from "@chakra-ui/react";
import React from "react";
import { Home } from "../../components/Home";
import { useDashboardContext } from "./utils/context";

export default function DashboardView() {
    return (<Flex fontFamily={'Raleway'}><Home /></Flex>);
}    
