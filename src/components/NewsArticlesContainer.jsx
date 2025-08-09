import { Box, Stack, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const NewsArticlesContainer = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="stretch"
        >
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                flex={1}
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 4
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                flex={1}
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 5
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                flex={1}
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 6
                </Text>
            </Box>
        </Stack>
    )
}

export default NewsArticlesContainer
