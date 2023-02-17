import React from "react"
import logo from "../images/logo.png"
import NavBar from "./NavBar"
import { Flex, Image} from "@chakra-ui/react"

function Header() {
    return (
        <Flex alignItems="center" justify="space-between">
            <Flex alignItems="center">
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