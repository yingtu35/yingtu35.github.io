import React, { useEffect, useRef, useState } from "react"
import { SliderData } from "../data/SliderData"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { Image, HStack, Button, Flex, Box } from "@chakra-ui/react";

function ImageSlider({ slides, auto }) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(0);
    const [pressLeft, setPressLeft] = useState(false);
    const [pressRight, setPressRight] = useState(false);
    const length = slides.length;

    function prevSlide(){
        setPrevIdx(currentIdx);
        setCurrentIdx(currentIdx === 0? length-1 : currentIdx-1);
        setPressLeft(true);
        setPressRight(false);
    };

    function nextSlide(){
        setPrevIdx(currentIdx);
        setCurrentIdx(currentIdx === length-1? 0 : currentIdx+1);
        setPressRight(true);
        setPressLeft(false);
    };

    function handleButton(index){
        setPrevIdx(currentIdx);
        setCurrentIdx(index);
        if (index < currentIdx) {
            setPressLeft(true);
            setPressRight(false);
        }
        else{
            setPressRight(true);
            setPressLeft(false);
        }
    }

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
        <Flex direction="column" alignItems="center" justifyContent="center">
        <Box className="image-slider">
            <FaArrowAltCircleLeft  className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
                // var clsName = "slide";
                // if (index === currentIdx){
                //     clsName = pressLeft? "slide-right-in" : pressRight? "slide-left-in" : "slide"; 
                // }
                // else if (index === prevIdx){
                //     clsName = pressLeft? "slide-right-out" : pressRight? "slide-left-out" : "slide"; 
                // }
                return (
                    <div className={index === currentIdx? "slide-active" : "slide"}
                         key={index}
                    >
                        {index === currentIdx && (
                            <Image src={slide.image} alt={slide.title} className="image" />
                        )}
                    </div>
                );
            })}
        </Box>
        <HStack className="image-slider-controller" m={2}>
            {slides.map((slide, index) => {
                return (
                    <Button onClick={() => handleButton(index)} 
                            bg={index === currentIdx? "white.100" : "white.900"} 
                            borderRadius="full" 
                            size="xs" 
                            key={`button_${index}`}>
                         
                    </Button>
                )
            })}
        </HStack>
        </Flex>
    );
};

export default ImageSlider;