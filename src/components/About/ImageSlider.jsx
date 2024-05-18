import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { Image, HStack, Flex, Box } from "@chakra-ui/react";
import useImageSlider from "hooks/useImageSlider";

function ImageSlider({ slides, interval }) {
    const { currentIdx, onIdxChange, onPrevSlide, onNextSlide } = useImageSlider({ length: slides.length, interval });

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    

    return(
        <Flex className="image-slider-container">
        <Box className="image-slider-box">
            <MdArrowBackIosNew  className="left-arrow" onClick={onPrevSlide} />
            <MdArrowForwardIos className="right-arrow" onClick={onNextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === currentIdx? "slide-active" : "slide"} key={slide.image}>
                        <Image src={slide.image} 
                               alt={slide.title}
                               loading="lazy" 
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
                         aria-label={`slide-${index}`}
                         onClick={() => onIdxChange(index)}
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