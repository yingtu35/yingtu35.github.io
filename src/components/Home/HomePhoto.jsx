import React from "react"
import { Box, Image } from "@chakra-ui/react"

function HomePhoto() {
    return (
            <Box m={1} position="relative">
                <Box className="portrait-circle"></Box>
                <Box className="portrait-box">
                    <Image  className="hidden"
                            sizes="(max-width: 1080px) 100vw, 1080px"
                            srcSet="
                            /self-portrait/Self-portrait_l50c8v_c_scale,w_240.webp 240w,
                            /self-portrait/Self-portrait_l50c8v_c_scale,w_541.webp 541w,
                            /self-portrait/Self-portrait_l50c8v_c_scale,w_875.webp 875w,
                            /self-portrait/Self-portrait_l50c8v_c_scale,w_1042.webp 1042w,
                            /self-portrait/Self-portrait_l50c8v_c_scale,w_1080.webp 1080w"
                            src="/self-portrait/Self-portrait_l50c8v_c_scale,w_1080.webp"
                            alt="self-portrait"
                            fetchpriority="high"
                            borderRadius="full"
                            width={['240px', '240px', '360px', '360px', '30vw']}
                            height={['240px', '240px', '360px', '360px', '30vw']}
                    />
                </Box>
            </Box>
    );
};

export default HomePhoto;