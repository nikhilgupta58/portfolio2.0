
import { Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { blogs } from "../../utils/Blog_data";
import { projects } from "../../utils/Project_data";
import { useBlogContext } from "./utils/context";

export default function BlogView() {
    const { count } = useBlogContext();
    const [hovered, setHovered] = React.useState(null)
    return (
        <Flex
            minH='100vh'
            id='blog'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 50px 0', md: '70px 0 70px 0', lg: '100px 0 130px 0' }}
            color={'#616161'}
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
            overflowX={'hidden'}
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
                        BLOG
                    </Text>
                    <Flex mt={4} w='50px' h='5px' bgColor={'#444649'} />
                </Flex>
                <Grid
                    m={{ base: '40px 0 30px 0', sm: '60px 0 35px 0', md: '80px 0 50px 0', lg: '100px 0 70px 0' }}
                    w='100%'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap={6}
                    justifyItems='center'
                >
                    {blogs.map((blog, id) => (
                        <GridItem
                            as={motion.div}
                            key={id}
                            opacity={hovered != null ? 0.5 : 1}
                            _hover={{
                                opacity: !(hovered == id) ? 0.5 : 1,
                                transition: '0.2s ease-in'
                            }}
                            onMouseOver={(e) => {
                                setHovered(id)
                            }}
                            onMouseOut={() => {
                                setHovered(null)
                            }}
                        >
                            <Flex
                                direction={'column'}
                                w={{ base: '300px', sm: '300px', md: '380px', xl: '300px' }}
                                onClick={() => window.open(blog.link)}
                                cursor='pointer'
                            >
                                <Flex mb={'15px'} bgColor='#f5f5f5' border={'2px solid #f5f5f5'}>
                                    <Image w='100%' h='100%' src={blog.image} />
                                </Flex>
                                <Flex
                                    color={'#616161'}
                                    fontWeight='600'
                                    fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                                >
                                    {blog.title}
                                </Flex>
                                <Flex
                                    color={'#616161'}
                                    fontWeight='600'
                                    fontSize={'8.5pt'}
                                >
                                    {blog.date}
                                </Flex>
                                <Flex height={'3px'} bgColor='#04c2c9' w='25%' m='15px 0' />
                                <Flex>
                                    <Text noOfLines={2}>
                                        {blog.desc}
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
