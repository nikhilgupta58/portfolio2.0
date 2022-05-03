
import { Flex,Text } from "@chakra-ui/react";
import React from "react";
import { usePortfolioContext } from "./utils/context";

export default function PortfolioView() {
    return (
        <Flex
            minH='100vh'
            id='portfolio'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 50px 0', md: '70px 0 70px 0', lg: '100px 0 130px 0' }}
            color={'#616161'}
            bgColor='#f5f5f5'
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
        >
            <Flex
                w={{ base: '90vw', md: '80vw', lg: '70vw' }}
                alignItems='center'
                color='#444649'
                direction={'column'}
            >
                <Flex alignItems={'center'} direction='column'>
                    <Text
                        fontSize={{ base: '15pt', sm: '18pt', md: '23pt', lg: '30pt' }}
                        lineHeight={{ base: '0pt', sm: '12pt', md: '16pt', lg: '18pt' }}
                        fontWeight={'700'}
                    >
                        PROJECTS
                    </Text>
                    <Flex mt={4} w='50px' h='5px' bgColor={'#444649'} />
                </Flex>
            </Flex>
        </Flex>
    );
}    
