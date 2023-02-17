import React from "react"
import Media from "react-media"
import { MdLightMode, MdNightlight, MdMenu } from "react-icons/md"
import { Box, IconButton, Text, useColorMode } from "@chakra-ui/react"
import { ButtonGroup, Button } from "@chakra-ui/react"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Media query="(max-width: 767px)">
            {matches => (
                matches? (
                    <ButtonGroup>
                        {colorMode === "dark" ?
                            <Button variant="ghost" onClick={toggleColorMode}>
                                <MdLightMode />
                            </Button> 
                            :
                            <Button variant="ghost" 
                                    onClick={toggleColorMode}>
                                <MdNightlight />
                            </Button>
                        }
                        <Menu isLazy={true}>
                            <MenuButton
                                as={IconButton}
                                icon={<MdMenu />}
                                variant="ghost" />
                            <MenuList width="80vw" textAlign="center">
                                <MenuItem className="menu-item" as="a" href="#">Home</MenuItem>
                                <MenuItem className="menu-item" as="a" href="#about-section">About</MenuItem>
                                <MenuItem className="menu-item" as="a" href="#projects-section">Projects</MenuItem>
                                <MenuItem className="menu-item" as="a" href="#contact-section">Contact</MenuItem>
                            </MenuList>
                        </Menu>
                    </ButtonGroup>
                ) : (
            <ButtonGroup>
                {colorMode === "dark" ?
                    <Button variant="ghost" onClick={toggleColorMode}>
                        <MdLightMode />
                    </Button> 
                    :
                    <Button variant="ghost" 
                            onClick={toggleColorMode}>
                        <MdNightlight />
                    </Button>
                }
                <Button variant="ghost"  as="a" href="#">
                    Home
                </Button>
                <Button variant="ghost" as="a" href="#about-section">
                    About
                </Button>
                <Button variant="ghost" as="a" href="#projects-section">
                    Projects
                </Button>
                <Button variant="ghost" as="a" href="#contact-section">
                    Contact
                </Button>
                <Button variant="solid" colorScheme="lam" as="a" 
                        href="https://drive.google.com/file/d/1QW_MzyBlSy3x5TZGu4lxouB-0IRuLjIl/view?usp=sharing" 
                        target="_blank">
                    Resume
                </Button>
            </ButtonGroup>
                )
            )}
        </Media>
    )
}

export default NavBar;