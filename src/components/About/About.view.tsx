
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAboutContext } from "./utils/context";

export default function AboutView() {
    const {  } = useAboutContext();
    return (
        <Flex h='100vh' bgColor={'green'} id='about'>

        </Flex>
    )
}    
