import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { characterstics } from "../../utils/About_data";
import { useAboutContext } from "./utils/context";

export default function AboutView() {
    const { } = useAboutContext();
    return (
        <Flex
            minH='100vh'
            id='about'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 50px 0', md: '70px 0 70px 0', lg: '100px 0 130px 0' }}
            color={'#616161'}
            fontSize={{ base: '10pt', sm: '11pt', md: '12pt' }}
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
                        ABOUT
                    </Text>
                    <Flex mt={4} w='50px' h='5px' bgColor={'#444649'} />
                </Flex>
                <Grid
                    m={{ base: '40px 0 20px 0', sm: '60px 0 30px 0', md: '80px 0 40px 0', lg: '100px 0 50px 0' }}
                    w='100%'
                    templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap={6}
                >
                    {characterstics.map((data, id) => (
                        <GridItem
                            key={id}
                            justifySelf='center'
                        >
                            <Flex direction={'column'} alignItems='center'>
                                <Flex
                                    w='100px'
                                    h='100px'
                                    bgColor='#04c2c9'
                                    borderRadius={'30px'}
                                    color='white'
                                    justifyContent={'center'}
                                    alignItems='center'
                                    fontSize={'50px'}
                                >
                                    <data.img />
                                </Flex>
                                <Flex direction={'column'}>
                                    <Flex
                                        fontWeight='600'
                                        fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                                        my={{ base: 1, sm: 1, md: 2 }}
                                        justifyContent='center'
                                    >
                                        {data.title}
                                    </Flex>
                                    <Text
                                        textAlign={'center'}
                                    >
                                        {data.desc}
                                    </Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    )
}    
