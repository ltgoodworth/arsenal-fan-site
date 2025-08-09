import { Container, Heading, VStack, Box } from "@chakra-ui/react"
import { useColorModeValue } from "../components/ui/color-mode"
import NewsGrid from "../components/NewsGrid"
import NewsList from "../components/NewsList"

const NewsPage = () => {
    const textColor = useColorModeValue("gray.800", "gray.200")
    const containerBgColor = useColorModeValue("gray.100", "gray.800")

    return (
        <Container maxW="100vw" px={4} py={8}>
            {/* Page Title */}
            <Heading as="h1" size="lg" mb={6} textAlign="left" color={textColor}>
                News Page
            </Heading>

            {/* Navigation Bar - Already handled by Navbar component */}

            {/* Main Content Area */}
            <Box
                bg={containerBgColor}
                p={8}
                borderRadius="lg"
                minH="80vh"
            >
                <VStack spacing={8} align="stretch">
                    {/* Top News Articles Section - 2x2 Grid */}
                    <NewsGrid />

                    {/* Bottom News Articles Section - Vertical List */}
                    <NewsList />
                </VStack>
            </Box>
        </Container>
    )
}

export default NewsPage