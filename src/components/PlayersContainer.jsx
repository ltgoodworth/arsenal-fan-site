import { VStack, Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"
import PlayerProfile from "./PlayerProfile"

const PlayersContainer = () => {
    const textColor = useColorModeValue("gray.800", "gray.200")

    // Sample data - in a real app, this would come from an API or props
    const players = [
        {
            id: 1,
            name: "David Raya",
            position: "Goalkeeper",
            number: "1",
            stats: {
                "Clean sheets": "12",
                "Save Percentage": "82%",
                "Pass Completion": "68%"
            },
            isDetailed: true
        },
        // Placeholder players
        { id: 2, isDetailed: false },
        { id: 3, isDetailed: false },
        { id: 4, isDetailed: false }
    ]

    return (
        <VStack spacing={0} align="stretch">
            {players.map((player) => (
                <PlayerProfile
                    key={player.id}
                    name={player.name}
                    position={player.position}
                    number={player.number}
                    stats={player.stats}
                    isDetailed={player.isDetailed}
                />
            ))}

            {/* Scroll Indicator */}
            <Box textAlign="center" mt={6}>
                <Text fontSize="2xl" color={textColor}>
                    ↓
                </Text>
            </Box>
        </VStack>
    )
}

export default PlayersContainer
