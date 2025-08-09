import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const LeagueTable = () => {
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
                League Table - Latest standings
            </Text>
        </Box>
    )
}

export default LeagueTable
