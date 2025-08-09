import { Container, Heading, Box } from "@chakra-ui/react"
import { useColorModeValue } from "../components/ui/color-mode"
import TablesContainer from "../components/TablesContainer"

const TablesPage = () => {
    const textColor = useColorModeValue("gray.800", "gray.200")
    const containerBgColor = useColorModeValue("gray.100", "gray.800")

    return (
        <Container maxW="100vw" px={4} py={8}>
            {/* Page Title */}
            <Heading as="h1" size="lg" mb={6} textAlign="left" color={textColor}>
                Tables Page
            </Heading>

            {/* Navigation Bar - Already handled by Navbar component */}

            {/* Main Content Area */}
            <Box
                bg={containerBgColor}
                p={8}
                borderRadius="lg"
                minH="80vh"
            >
                <TablesContainer />
            </Box>
        </Container>
    )
}

export default TablesPage