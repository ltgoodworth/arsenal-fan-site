import { Box, Text, VStack } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const ChampionsLeagueTable = () => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")

    const tableData = [
        { position: 1, team: "Arsenal", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
        { position: 2, team: "Bayern Munich", played: 2, won: 1, drawn: 0, lost: 1, points: 3 }
    ]

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            flex={1}
            minH="200px"
        >
            <Text fontSize="lg" fontWeight="bold" color={textColor} mb={2}>
                Champions League
            </Text>
            <Text fontSize="md" color={textColor} mb={4}>
                Group B
            </Text>
            <VStack spacing={2} align="stretch">
                {tableData.map((row) => (
                    <Text key={row.position} fontSize="sm" color={textColor}>
                        {row.position}. {row.team} {row.played} {row.won} {row.drawn} {row.lost} {row.points}
                    </Text>
                ))}
                <Text fontSize="sm" color={textColor} textAlign="center" mt={2}>
                    ↓
                </Text>
            </VStack>
        </Box>
    )
}

export default ChampionsLeagueTable
