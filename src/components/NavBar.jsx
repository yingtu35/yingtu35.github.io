import React from "react"
import Media from "react-media"
import { MdLightMode, MdNightlight, MdMenu } from "react-icons/md"
import { IconButton, useColorMode } from "@chakra-ui/react"
import { ButtonGroup, Button } from "@chakra-ui/react"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import resume from "files/Resume_Ying_Tu.pdf"

function NavBarMobile({ colorMode, toggleColorMode }) {
    return (
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
            <Menu isLazy={false}>
                <MenuButton
                    as={IconButton}
                    icon={<MdMenu />}
                    variant="ghost" />
                <MenuList width="80vw">
                    {/* <MenuItem className="menu-item" as="a" href="#">Home</MenuItem> */}
                    <MenuItem className="menu-item" as="a" href="#about">About</MenuItem>
                    <MenuItem className="menu-item" as="a" href="#experiences">Experiences</MenuItem>
                    <MenuItem className="menu-item" as="a" href="#projects">Projects</MenuItem>
                    <MenuItem className="menu-item" as="a" href="#contact">Contact</MenuItem>
                </MenuList>
            </Menu>
        </ButtonGroup>
    )
}

function NavBarPC({ colorMode, toggleColorMode }) {
    return (
        <ButtonGroup>
            {colorMode === "dark" ?
                <button className="navBtn navBtn1" 
                        onClick={toggleColorMode}
                        aria-label="darkmode-btn"
                >
                    <MdLightMode />
                </button> 
                :
                <button className="navBtn navBtn1" 
                        onClick={toggleColorMode}
                        aria-label="lightmode-btn"
                >
                    <MdNightlight />
                </button> 
            }
            {/* <a className="navBtn navBtn1" href="#">Home</a> */}
            <a className="navBtn navBtn1" href="#about">About</a>
            <a className="navBtn navBtn1" href="#experiences">Experiences</a>
            <a className="navBtn navBtn1" href="#projects">Projects</a>
            <a className="navBtn navBtn1" href="#contact">Contact</a>
            <a className="navBtn navBtn2"
                    href={resume} 
                    target="_blank"
                    rel="noreferrer">
                        Resume
            </a>
        </ButtonGroup>
    )
}

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Media query="(max-width: 767px)">
            {matches => (
                matches? (
                    <NavBarMobile colorMode={colorMode} toggleColorMode={toggleColorMode} />
                ) : (
                    <NavBarPC colorMode={colorMode} toggleColorMode={toggleColorMode} />
                )
            )}
        </Media>
    )
}

export default NavBar;