import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { aboutme, characterstics, skills } from "../../utils/About_data";
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
                        ABOUT
                    </Text>
                    <Flex mt={4} w='50px' h='5px' bgColor={'#444649'} />
                </Flex>
                <Grid
                    m={{ base: '40px 0 30px 0', sm: '60px 0 35px 0', md: '80px 0 50px 0', lg: '100px 0 70px 0' }}
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
                                        color={'#616161'}
                                        fontWeight='600'
                                        fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                                        my={{ base: 1, sm: 1, md: 2 }}
                                        justifyContent='center'
                                    >
                                        {data.title}
                                    </Flex>
                                    <Text
                                        textAlign={'center'}
                                        color={'#616161'}
                                    >
                                        {data.desc}
                                    </Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>

                <Flex
                    w='100%'
                    gap={10}
                    direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
                >
                    <Flex
                        w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
                        direction='column'
                        justifyContent={'space-between'}
                        alignItems='center'
                    >
                        <Flex borderRadius={'10px'} w='50%' overflow='hidden'>
                            <Image src="./nikhil.jpeg" objectFit={'contain'}></Image>
                        </Flex>
                        <Flex direction={'column'}>
                            <Flex
                                color={'#616161'}
                                fontWeight='600'
                                fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                                m='20px 0 10px 0'
                                justifyContent='center'
                            >
                                Who's this guy?
                            </Flex>
                            <Flex direction={'column'} alignItems='center'>
                                <Text
                                    color={'#616161'}
                                    textAlign='center'
                                >
                                    I'm a Front-End Developer for
                                    <a href={aboutme.companyWebsite} target='_blank' style={{ 'padding': '0px 5px', color: '#009ada' }}>{aboutme.company}</a>
                                    in {aboutme.city}, {aboutme.country}.
                                </Text>
                                <Text
                                    color={'#616161'}
                                    textAlign='center'
                                    mx='15%'
                                >
                                    {aboutme.desc}
                                </Text>
                                <a href="#contact" style={{ 'padding': '0px 5px', color: '#009ada' }}>Let's make something special.</a>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex
                        w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
                        direction={'column'}
                        fontSize='11pt'
                        gap={'15px'}
                    >
                        {skills.map((skill, id) => (
                            <Flex key={id}>
                                <Flex
                                    w='200px'
                                    justifyContent={'center'}
                                    fontWeight='700'
                                    bgColor={'#04c2c9'}
                                    color='white'
                                    h='28px'
                                    alignItems={'center'}
                                    direction={'column'}
                                >
                                    {skill.title.toUpperCase()}
                                </Flex>
                                <Flex h={'28px'} w={`${skill.progress}%`} bgColor='#00a1a7' />
                                <Flex
                                    justifyContent={'end'}
                                    h={'28px'}
                                    w={`${100 - skill.progress}%`}
                                    bgColor='#eee'
                                    pr={2}
                                >
                                    {skill.progress}%
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}    
