import { Box, VStack, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const NewsList = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <VStack spacing={4} align="stretch">
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                minH="150px"
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
                minH="150px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 6
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                minH="150px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 7
                </Text>
            </Box>
        </VStack>
    )
}

export default NewsList
