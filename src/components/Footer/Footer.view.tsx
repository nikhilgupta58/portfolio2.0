
import { Flex } from "@chakra-ui/react";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { footers } from "../../utils/Footer_data";
import { useFooterContext } from "./utils/context";

export default function FooterView() {
    const { count } = useFooterContext();
    return (
        <Flex
            id='about'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 40px 0', md: '70px 0 40px 0', lg: '100px 0 40px 0' }}
            color={'#616161'}
            bgColor='#1b242f'
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
            position='relative'
        >
            <Flex
                w={{ base: '90vw', md: '80vw', lg: '70vw' }}
                alignItems='center'
                color='#444649'
                direction={'column'}
            >
                <Flex>
                    {footers.map((footer, id) => (
                        <Flex
                            w='50pt'
                            h={'55px'}
                            fontSize='18pt'
                            color={'white'}
                            bgColor='#262f38'
                            onClick={() => window.open(footer.link)}
                            m='0px 15px'
                            justifyContent={'center'}
                            alignItems='center'
                            cursor={'pointer'}
                            _hover={{
                                bgColor: '#04c2c9',
                                borderColor: '#04c2c9',
                                transition: '0.2s ease-in'
                            }}
                        >
                            <footer.icon />
                        </Flex>
                    ))}
                </Flex>
                <Flex mt={'35px'} color='#8f9aa7'>
                    NIKHIL KUMAR GUPTA<span style={{ 'color': '#e31b6c', paddingLeft: '5px' }}> ©2022</span>
                </Flex>
                <Flex
                    position={'absolute'}
                    fontSize={'30pt'}
                    h='50px'
                    w='47px'
                    color={'white'}
                    bgColor='#e31b6d'
                    justifyContent={'center'}
                    alignItems='center'
                    top={'-10%'}
                >
                    <a href="#home">
                        <Flex transform={'rotate(-90deg)'} justifyContent={'center'} alignItems='center'>
                            <MdDoubleArrow />
                        </Flex>
                    </a>
                </Flex>
            </Flex>
        </Flex>
    );
}    
