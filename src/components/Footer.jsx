import React from "react"
import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box textAlign="center" mb={5}>
            <Text className="color-lam" fontWeight="bold">Designed by Ying Tu. 2023<br />
                    Version: 1.0
            </Text>
        </Box>
        
    );
};

export default Footer;