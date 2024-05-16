import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { IoIosArrowDropupCircle } from "react-icons/io"
import useScroll from "../hooks/useScroll"

function BackToTopBtn() {
    const { showBackToTop, scrollToTop } = useScroll();

    return (
    <Box className="backToTopBtn"
         opacity={showBackToTop ? 1 : 0}
         as="button"
         onClick={scrollToTop}
    >
        <IoIosArrowDropupCircle className="color-lam" size="40px" />
        <Text className="content color-lam">Top</Text>
    </Box>)
}

export default BackToTopBtn;