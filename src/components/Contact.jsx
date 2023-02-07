import React from "react"
import { Flex, Box, Spacer, Center, Heading, Text, Image, ButtonGroup, Button } from "@chakra-ui/react"

function Contacts() {
    return (
        <Box textAlign="center">
            <Heading>Contacts</Heading>
            <Center bg='blue.500'>
                <Image  src='https://bit.ly/dan-abramov' 
                        alt="home-photo"
                        borderRadius="full"
                        boxSize="150px" 
                />
            </Center>
            <Text>Welcome to checkout my social account:</Text>
            <ButtonGroup>
                <Button as="a"
                        href="https://github.com/yingtu35">
                    Github
                </Button>
                <Button colorScheme="linkedin"
                        as="a"
                        href="https://www.linkedin.com/in/ying-tu-06b208102/">
                    Linkedin
                </Button>
                <Button colorScheme="facebook"
                        as="a"
                        href="https://www.facebook.com/profile.php?id=100000582214483">
                    Facebook
                </Button>
                <Button colorScheme="pink"
                        as="a"
                        href="https://www.instagram.com/orevo860305/">
                    Instagram
                </Button>
            </ButtonGroup>
            <Text>Feel free to send me an email and have a chat!</Text>
            <Box>
                <Button as="a"
                        href="mailto:yingtu35@gmail.com">
                    Mail
                </Button>
            </Box>
            
        </Box>
    )
}

export default Contacts