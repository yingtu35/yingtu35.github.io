import React, { useEffect, useRef, useState } from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { Image, HStack, Button, Flex, Box } from "@chakra-ui/react";

function ImageSlider({ slides, auto }) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const length = slides.length;

    function prevSlide(){
        setCurrentIdx((currentIdx - 1 + length) % length);
    };

    function nextSlide(){
        setCurrentIdx((currentIdx + 1) % length);
    };

    // automatically change slides
    var interval = null;
    const autoSlide = useRef();
    autoSlide.current = () => {
        if (auto > 0) {
            interval = setInterval(nextSlide, auto)
        }
    }

    useEffect(() => {
        autoSlide.current()
        return () => clearInterval(interval)
    }, [currentIdx])

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    

    return(
        <Flex className="image-slider-container">
        <Box className="image-slider-box">
            <MdArrowBackIosNew  className="left-arrow" onClick={prevSlide} />
            <MdArrowForwardIos className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === currentIdx? "slide-active" : "slide"} key={slide.image}>
                        <Image src={slide.image} 
                               alt={slide.title} 
                               className="image"
                        />
                    </div>
                );
            })}
        </Box>
        <HStack className="image-slider-controller" m={2}>
            {slides.map((slide, index) => {
                return (
                    <Box as="button"
                         onClick={() => setCurrentIdx(index)}
                         color="white"
                         bg={index === currentIdx? "white.100" : "white.700"}
                         width={['8px', '16px', '16px', '24px']}
                         height={['8px', '16px', '16px', '24px']}
                         borderRadius="100%"
                         key={slide.image}
                         >
                    </Box>
                )
            })}
        </HStack>
        </Flex>
    );
};

export default ImageSlider;