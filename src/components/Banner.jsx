import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const Banner = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Box
            bg={bgColor}
            p={8}
            borderRadius="lg"
            minH="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <Text fontSize="lg" fontWeight="medium" color={textColor}>
                Page wide banner scrolling through latest 3 news articles
            </Text>
        </Box>
    )
}

export default Banner
