import { Box, Flex } from '@chakra-ui/react';

export default function SectionTitle({ title }) {
    return (
        <Flex className="section-title-container">
            <Box className="section-title-divider"  />
            <Box className="section-title-box">
                {title.map((word, index) => {
                    return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                })}
            </Box>
            <Box className="section-title-divider"  />
        </Flex>
    )
}