
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { projects } from "../../utils/Project_data";

export default function PortfolioView() {
    const fadin = {
        hover: {
            opacity: 1,
            top: '20%',
            transition: { delay: 0.2, duration: 0.5 }
        }
    }
    const imageHover = {
        hover: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }
    return (
        <Flex
            minH='100vh'
            id='portfolio'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 50px 0', md: '70px 0 70px 0', lg: '100px 0 130px 0' }}
            color={'#616161'}
            bgColor='#f5f5f5'
            overflowX={'hidden'}
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
        >
            <Flex
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
                <Grid
                    m={{ base: '40px 0 30px 0', sm: '60px 0 35px 0', md: '80px 0 50px 0', lg: '100px 0 70px 0' }}
                    w='100%'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}
                >
                    {projects.map((project, id) => (
                        <GridItem
                            key={id}
                        >
                            <Flex
                                h='auto'
                                w={{ base: '100%', lg: '390px' }}
                                as={motion.div}
                                whileHover={'hover'}
                                position='relative'
                            >
                                <Flex
                                    variants={imageHover}
                                    as={motion.div}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        window.open(project.link)
                                    }}
                                >
                                    <Image h={'100%'} w='100%' src={project.image} />
                                </Flex>
                                <Flex
                                    position={'absolute'}
                                    opacity={0}
                                    as={motion.div}
                                    variants={fadin}
                                    top='0%'
                                    left='50%'
                                    transform={'translateX(-50%)'}
                                >
                                    <Flex
                                        direction='column'
                                        color={'#616161'}
                                        w='200px'
                                        alignItems={'center'}
                                        h='100%'
                                        justifyContent={'space-between'}
                                    >
                                        <Flex direction='column'>
                                            <Text
                                                textAlign={'center'}
                                                fontWeight='600'
                                                fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                                                lineHeight={{ base: '9pt', sm: '10pt', md: '11pt', lg: '12pt' }}
                                            >
                                                {project.title}
                                            </Text>
                                            <Text
                                                fontSize={{ base: '9pt', sm: '10pt', md: '11pt', lg: '12pt' }}
                                                textAlign={'center'}
                                            >
                                                {project.language}
                                            </Text>
                                        </Flex>
                                        <Flex
                                            justifyContent={'center'}
                                            border={'2px solid #e31b6d'}
                                            p='7px'
                                            mt={'50px'}
                                            cursor='pointer'
                                            w='170px'
                                            _hover={{
                                                bgColor: '#e31b6d',
                                                borderColor: '#e31b6d',
                                                transition: '0.2s ease-in',
                                                color: 'white'
                                            }}
                                            onClick={(e) => { e.preventDefault() }}
                                        >
                                            LEARN MORE
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    );
}    
