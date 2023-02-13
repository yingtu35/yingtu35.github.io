import React from "react"
import logo from "../logo.png"
import { MdLightMode, MdNightlight } from "react-icons/md"
import { Flex, Spacer, Center, Heading, Text, Image, ButtonGroup, Button, useColorMode  } from "@chakra-ui/react"

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Flex alignItems="center">
            <a href="#"><Image src={logo} alt="logo" boxSize="50px" m={1} /></a>
            <Heading>Ying Tu</Heading>
            <Spacer />
            <ButtonGroup>
                {colorMode === "dark" ?
                    <Button
                            variant="ghost"  
                            onClick={toggleColorMode}>
                                <MdLightMode />
                    </Button> 
                    :
                    <Button 
                            variant="ghost" 
                            onClick={toggleColorMode}
                            >
                                <MdNightlight />
                    </Button>
                }
                <Button variant="ghost" 
                        as="a"
                        href="#">
                    Home
                </Button>
                <Button variant="ghost"
                        as="a"
                        href="#about-section">
                    About
                </Button>
                <Button variant="ghost"
                        as="a"
                        href="#projects-section">
                    Projects
                </Button>
                <Button variant="ghost"
                        as="a"
                        href="#contact-section">
                    Contact
                </Button>
                <Button variant="solid"
                        colorScheme="green"
                        as="a"
                        href="https://drive.google.com/file/d/1QW_MzyBlSy3x5TZGu4lxouB-0IRuLjIl/view?usp=sharing"
                        target="_blank"
                >
                    Resume
                </Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Header