import React from "react"
import { Box, Text } from "@chakra-ui/react";

function Footer() {
    const curTime = new Date();
    return (
        <Box textAlign="center" mb={5}>
            <Text className="color-lam" fontWeight="bold">Designed by Ying Tu. {curTime.getFullYear()}<br />
                    Version: 1.5.1
            </Text>
        </Box>
        
    );
};

export default Footer;