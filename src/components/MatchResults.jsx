import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const MatchResults = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            flex={1}
            minH="400px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <Text fontSize="lg" fontWeight="medium" mb={2} color={textColor}>
                Last 3-5 match results
            </Text>
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                Link to Arsenal.com match report?
            </Text>
        </Box>
    )
}

export default MatchResults
