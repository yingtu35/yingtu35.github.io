import React from "react"
import logo from "../images/logo.png"
import { MdLightMode, MdNightlight } from "react-icons/md"
import { Flex, Box, Heading, Image, ButtonGroup, Button, useColorMode  } from "@chakra-ui/react"

function Header() {
    const name = "Ying Tu".split("");
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Flex alignItems="center" justify="space-between">
            <Flex alignItems="center">
                <a href="#"><Image className="logo-image" src={logo} alt="logo" boxSize="3rem" m={1} /></a>
                {/* <Box>
                    {name.map((word, index) => {
                        return (<span className="logo span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box> */}
            </Flex>
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
                        colorScheme="lam"
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