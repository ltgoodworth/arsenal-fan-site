import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"

const PlayerProfile = ({
    name,
    position,
    number,
    stats = {},
    imageUrl = null,
    isDetailed = false
}) => {
    const bgColor = useColorModeValue("gray.200", "gray.700")
    const textColor = useColorModeValue("gray.800", "gray.200")
    const imageBgColor = useColorModeValue("gray.300", "gray.600")

    // If no name is provided, this is a placeholder
    if (!name) {
        return (
            <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                mb={4}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={4}
                    alignItems={{ base: "center", md: "flex-start" }}
                >
                    {/* Player Picture Placeholder */}
                    <Box
                        bg={imageBgColor}
                        w={{ base: "120px", md: "100px" }}
                        h={{ base: "120px", md: "100px" }}
                        borderRadius="lg"
                        flexShrink={0}
                    />

                    {/* Empty space for player info */}
                    <Box flex={1} />
                </Flex>
            </Box>
        )
    }

    return (
        <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            mb={4}
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                alignItems={{ base: "center", md: "flex-start" }}
            >
                {/* Player Picture */}
                <Box
                    bg={imageBgColor}
                    w={{ base: "120px", md: "100px" }}
                    h={{ base: "120px", md: "100px" }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={`${name}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                        />
                    ) : (
                        <Text fontSize="sm" color={textColor} textAlign="center">
                            {isDetailed ? "Player Picture" : ""}
                        </Text>
                    )}
                </Box>

                {/* Player Information */}
                <VStack
                    align={{ base: "center", md: "flex-start" }}
                    spacing={2}
                    flex={1}
                >
                    {name && (
                        <Text fontSize="xl" fontWeight="bold" color={textColor}>
                            {name}
                        </Text>
                    )}
                    {position && (
                        <Text fontSize="md" color={textColor}>
                            {position}
                        </Text>
                    )}
                    {number && (
                        <Text fontSize="md" fontWeight="medium" color={textColor}>
                            No. {number}
                        </Text>
                    )}
                </VStack>

                {/* Player Statistics */}
                {isDetailed && Object.keys(stats).length > 0 && (
                    <VStack
                        align={{ base: "center", md: "flex-end" }}
                        spacing={1}
                        flex={1}
                    >
                        {Object.entries(stats).map(([key, value]) => (
                            <Text key={key} fontSize="sm" color={textColor}>
                                {key}: {value}
                            </Text>
                        ))}
                    </VStack>
                )}
            </Flex>
        </Box>
    )
}

export default PlayerProfile
