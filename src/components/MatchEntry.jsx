import { Box, Flex, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const MatchEntry = ({ date, teams, score, location, kickoff, matchReport, isCompleted = false }) => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")
    const linkColor = useColorModeValue("blue.500", "blue.300")

    // If no teams are provided, this is a placeholder
    if (!teams) {
        return (
            <Box
                bg={bgColor}
                p={4}
                borderRadius="lg"
                mb={3}
                minH="60px"
            />
        )
    }

    return (
        <Box
            bg={bgColor}
            p={4}
            borderRadius="lg"
            mb={3}
        >
            <Flex
                justifyContent="space-between"
                alignItems="center"
                flexWrap={{ base: "wrap", md: "nowrap" }}
                gap={2}
            >
                {/* Date */}
                <Text fontSize="sm" fontWeight="medium" color={textColor} minW="60px">
                    {date}
                </Text>

                {/* Teams */}
                <Text fontSize="md" fontWeight="medium" color={textColor} flex={1} textAlign="center">
                    {teams}
                </Text>

                {/* Score or Location/Kickoff */}
                <Flex gap={2} alignItems="center">
                    {isCompleted ? (
                        <>
                            <Text fontSize="md" fontWeight="bold" color={textColor}>
                                {score}
                            </Text>
                            {matchReport && (
                                <Text fontSize="sm" color={linkColor} textDecoration="underline" cursor="pointer">
                                    Match report
                                </Text>
                            )}
                        </>
                    ) : (
                        <>
                            <Text fontSize="sm" color={textColor}>
                                {location}
                            </Text>
                            <Text fontSize="sm" fontWeight="medium" color={textColor}>
                                KO {kickoff}
                            </Text>
                        </>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}

export default MatchEntry
