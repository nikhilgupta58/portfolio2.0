import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigationBarContext } from "./utils/context";

export default function NavigationBarView() {
    const { items, setShow, show, variants } = useNavigationBarContext()
    return (
        <>
            <Flex
                top={'0%'}
                bgColor='#1b242f'
                position={'sticky'}
                h='50px'
                borderBottom={'3px solid #04c2c9'}
                alignItems={'center'}
                justifyContent='center'
                fontSize={{ base: '8pt', sm: '10pt', md: '11pt', lg: '12pt' }}
                lineHeight={{ base: '12pt', sm: '14pt', md: '16pt', lg: '18pt' }}
                zIndex={99}
            >
                <Flex w={{ base: '90vw', md: '80vw', lg: '70vw' }} display={{ base: 'none', sm: 'inherit' }}>
                    {items.map((item, id) => (
                        <Flex key={id} color={item.active ? '#e31b6d' : 'white'} m='0 20px' cursor={'pointer'}>
                            <a href={item.href}>{item.title}</a>
                        </Flex>
                    ))}
                </Flex>
                <Flex
                    color={'white'}
                    fontSize='20pt'
                    w='100%'
                    m='0 20px'
                    justifyContent={'end'}
                    display={{ base: 'inherit', sm: 'none' }}
                    cursor='pointer'
                    onClick={() => setShow(!show)}
                >
                    <Flex>
                        <HamburgerIcon />
                    </Flex>
                </Flex>
                <Flex
                    as={motion.div}
                    w={'100%'}
                    direction={'column'}
                    position='absolute'
                    fontSize={'12pt'}
                    lineHeight={'11pt'}
                    top='53px'
                    bgColor={'#333'}
                    animate={show ? "open" : "closed"}
                    variants={variants}
                >
                    {items.map((item, id) => (
                        <Flex key={id} color={item.active ? '#e31b6d' : 'white'} m='10px 20px' cursor={'pointer'} onClick={() => setShow(false)}>
                            <a href={item.href}>{item.title}</a>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    )
}    
