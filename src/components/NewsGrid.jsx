import { Box, Grid, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const NewsGrid = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={4}
            mb={8}
        >
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 1
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 2
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                minH="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                    News article 3
                </Text>
            </Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
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
        </Grid>
    )
}

export default NewsGrid
