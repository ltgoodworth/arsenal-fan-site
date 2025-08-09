import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const Footer = () => {
    const footerBgColor = useColorModeValue("gray.300", "gray.600")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Box
            bg={footerBgColor}
            p={6}
            borderRadius="lg"
            mt={8}
            textAlign="center"
        >
            <Text fontSize="md" fontWeight="medium" color={textColor}>
                Footer - Site details
            </Text>
        </Box>
    )
}

export default Footer
