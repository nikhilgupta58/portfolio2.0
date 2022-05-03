
import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { useContactContext } from "./utils/context";

export default function ContactView() {
    const { onSubmit, form } = useContactContext()
    return (
        <Flex
            id='contact'
            justifyContent={'center'}
            p={{ base: '40px 0 40px 0', sm: '50px 0 50px 0', md: '70px 0 70px 0', lg: '100px 0 130px 0' }}
            color={'white'}
            bgColor='#252934'
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
        >
            <Flex
                w={{ base: '90vw', md: '80vw', lg: '70vw' }}
                alignItems='center'
                direction={'column'}
            >
                <Flex alignItems={'center'} direction='column'>
                    <Text
                        fontSize={{ base: '15pt', sm: '18pt', md: '23pt', lg: '30pt' }}
                        lineHeight={{ base: '0pt', sm: '12pt', md: '16pt', lg: '18pt' }}
                        fontWeight={'700'}
                    >
                        CONTACT
                    </Text>
                    <Flex mt={4} w='50px' h='5px' bgColor={'white'} />
                </Flex>
                <Flex mt={'40px'} color='#04c2c9' fontWeight={'600'}>
                    Have a question or want to work together?
                </Flex>
                <form ref={form} onSubmit={onSubmit}>
                    <Flex
                        direction={'column'}
                        mt={'60px'}
                        mb='100px'
                        w={{ base: '300px', sm: '450px', md: '500px' }}
                        gap={1}
                    >
                        <Input
                            name="user_name"
                            bgColor={'#1e242c'}
                            p='10px 15px'
                            placeholder='Name'
                            border={'none'}
                            borderRadius='0'
                            _placeholder={{ color: '#686868' }}
                        />
                        <Input
                            type='email'
                            name="user_email"
                            bgColor={'#1e242c'}
                            p='10px 15px'
                            placeholder='Enter Email'
                            border={'none'}
                            borderRadius='0'
                            _placeholder={{ color: '#686868' }}
                        />
                        <Textarea
                            name="message"
                            bgColor={'#1e242c'}
                            p='10px 15px'
                            placeholder='Your Message'
                            border={'none'}
                            borderRadius='0'
                            _placeholder={{ color: '#686868' }}
                        />
                        <Input bgColor={'transparent'}
                            p='8px 15px'
                            alignSelf={'end'}
                            borderRadius='0'
                            w='110px'
                            _hover={{
                                bgColor: '#04c2c9',
                                borderColor: '#04c2c9',
                                transition: '0.2s ease-in'
                            }}
                            border={'2px solid white'}
                            justifyContent='center' type={'submit'} value='SUBMIT' cursor={'pointer'}
                        />
                    </Flex>
                </form>
            </Flex>
        </Flex>
    )
}    
