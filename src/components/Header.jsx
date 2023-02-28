import React, { useEffect } from "react"
import logo from "../images/logo.png"
import NavBar from "./NavBar"
import { Flex, Image, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"

function Header() {
    const bg = useColorModeValue('white', 'gray.800');
    const [hide, setHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const controlNavBar = () => {
        if (window.scrollY >= 0 && (window.scrollY > lastScrollY)) {
            setHide(true);
        } else{
            setHide(false);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
        return () => {
            window.removeEventListener('scroll', controlNavBar);
        }
    }, [lastScrollY]);

    return (
        <Flex className={`header-container ${hide && `header-hidden`}`} bg={bg}>
            <Flex>
                <a href="#"><Image className="logo-image" src={logo} alt="logo" boxSize={['2.5rem', '4rem']} m={1} /></a>
                {/* <Box>
                    {name.map((word, index) => {
                        return (<span className="logo span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box> */}
            </Flex>
            <NavBar />
        </Flex>
    )
}

export default Header