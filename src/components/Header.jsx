import NavBar from "./NavBar"
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react"
import useNavBar from "../hooks/useNavBar"

function Header() {
    const bg = useColorModeValue('white', 'gray.800');
    const { hide } = useNavBar();

    return (
        <Flex className={`header-container ${hide && `header-hidden`}`} bg={bg}>
            <Flex>
                <Box 
                    as="a"
                    href="#"
                >
                    <Image className="logo-image" src="/logo192.png" alt="logo" boxSize={['2.5rem', '4rem']} m={1} />
                </Box>
            </Flex>
            <NavBar />
        </Flex>
    )
}

export default Header