import { Box, Text, VStack } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const LeagueCupFixtures = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    const fixtures = [
        { homeTeam: "Arsenal", awayTeam: "Newcastle", date: "Oct 30" }
    ]

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            flex={1}
            minH="150px"
        >
            <Text fontSize="lg" fontWeight="bold" color={textColor} mb={4}>
                League Cup - Quarter Final
            </Text>
            <VStack spacing={2} align="stretch">
                {fixtures.map((fixture, index) => (
                    <Text key={index} fontSize="sm" color={textColor}>
                        {fixture.homeTeam} vs. {fixture.awayTeam} {fixture.date}
                    </Text>
                ))}
            </VStack>
        </Box>
    )
}

export default LeagueCupFixtures
