import React, {useState, useEffect} from "react"
import { Box, Text } from "@chakra-ui/react"
import { IoIosArrowDropupCircle } from "react-icons/io"

function BackToTopBtn() {
    const viewHeight = window.innerHeight;
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <Box className="backToTopBtn"
         opacity={scrollPosition > 0.3*viewHeight? 1: 0}
         as="a"
         href="#">
        <IoIosArrowDropupCircle className="color-lam" size="40px" />
        <Text className="content color-lam">Top</Text>
    </Box>)
}

export default BackToTopBtn;