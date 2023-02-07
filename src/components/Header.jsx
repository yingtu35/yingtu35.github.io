import React from "react"
import logo from "../logo.png"
import { Flex, Spacer, Center, Heading, Text, Image, ButtonGroup, Button  } from "@chakra-ui/react"

function Header() {
    return (
        <Flex alignItems="center">
            <a href=""><Image src={logo} alt="logo" boxSize="50px" /></a>
            <Heading>Title</Heading>
            <Spacer />
            <ButtonGroup>
                <Button variant="ghost">
                    Home
                </Button>
                <Button variant="ghost">
                    About
                </Button>
                <Button variant="ghost">
                    Projects
                </Button>
                <Button variant="ghost">
                    Contact
                </Button>
                <Button variant="solid"
                        as="a"
                        href="Resume.pdf" // to change
                        target="_blank"
                >
                    Resume
                </Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Header