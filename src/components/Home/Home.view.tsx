import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useHomeContext } from "./utils/context";
import { motion } from 'framer-motion';
import { NavigationBar } from "../NavigationBar";


export default function HomeView() {
    const { rotate } = useHomeContext();
    return (
        <>
            <Flex
                id="home"
                h='100vh'
                bgColor={'#252934'}
                justifyContent='center'
                alignItems={'center'}
                flexDir={'column'}
                fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                color={'white'}
                lineHeight={{ base: '20pt', sm: '25pt', md: '30pt', lg: '36pt' }}
                fontWeight={'400'}
            >
                <Flex mb={'20px'} flexDir='column' >
                    <Text textAlign={'center'}>Hello, I'm <span style={{ 'color': '#e31b6c', fontWeight: '600' }}>Nikhil Gupta</span>.</Text>
                    <Text textAlign={'center'}>I'm a full-stack web developer.</Text>
                </Flex>
                <Flex
                    as={motion.div}
                    whileHover={"hover"}
                    fontSize={{ base: '8pt', sm: '12pt', md: '14pt', lg: '16pt' }}
                    px='20px'
                    border={'2px solid #fff'}
                    cursor='pointer'
                    justifyContent={'center'}
                    alignItems='center'
                    columnGap={'15px'}
                    _hover={{
                        bgColor: '#04c2c9',
                        borderColor:'#04c2c9',
                        transition: '0.2s ease-in'
                    }}
                >
                    <a href="#about">View my work</a>
                    <Flex
                        as={motion.div}
                        variants={rotate}
                    >
                        <ArrowForwardIcon />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}    
