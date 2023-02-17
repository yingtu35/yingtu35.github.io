import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { IoIosArrowDropupCircle } from "react-icons/io"

function BackToTopBtn() {
    return (
    <Box position="fixed"
         textAlign="center"
         bottom={10}
         right={10}
         as="a"
         href="#">
        <IoIosArrowDropupCircle size="40px" />
        <Text>Top</Text>
    </Box>)
}

export default BackToTopBtn;