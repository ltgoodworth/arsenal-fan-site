import { Box, Text, VStack } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const PremierLeagueTable = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    const tableData = [
        { position: 1, team: "Arsenal", played: 12, won: 9, drawn: 2, lost: 1, goalsFor: 15, goalsAgainst: 4, goalDifference: "+11", points: 29 },
        { position: 2, team: "Liverpool", played: 11, won: 8, drawn: 2, lost: 1, goalsFor: 12, goalsAgainst: 6, goalDifference: "+6", points: 26 }
    ]

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            flex={1}
            minH="300px"
        >
            <Text fontSize="lg" fontWeight="bold" color={textColor} mb={4}>
                Premier League Table
            </Text>
            <VStack spacing={2} align="stretch">
                {tableData.map((row) => (
                    <Text key={row.position} fontSize="sm" color={textColor}>
                        {row.position}. {row.team} {row.played} {row.won} {row.drawn} {row.lost} {row.goalsFor} {row.goalsAgainst} {row.goalDifference} {row.points}
                    </Text>
                ))}
                <Text fontSize="sm" color={textColor} textAlign="center" mt={2}>
                    ↓
                </Text>
            </VStack>
        </Box>
    )
}

export default PremierLeagueTable
