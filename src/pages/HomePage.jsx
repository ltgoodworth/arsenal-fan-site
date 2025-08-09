import { Container, Heading, VStack } from "@chakra-ui/react"
import { useColorModeValue } from "../components/ui/color-mode"
import Banner from "../components/Banner"
import NewsArticlesRow from "../components/NewsArticlesRow"
import TablesResultsRow from "../components/TablesResultsRow"
import Footer from "../components/Footer"

const HomePage = () => {
    const textColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Container maxW="100vw" px={4} py={8}>
            {/* Page Title */}
            <Heading as="h1" size="lg" mb={6} textAlign="left" color={textColor}>
                Home Page
            </Heading>

            {/* Navigation Bar - Already handled by Navbar component */}

            {/* Main Content Area */}
            <VStack spacing={8} align="stretch">
                {/* Banner Row */}
                <Banner />

                {/* News Articles Row */}
                <NewsArticlesRow />

                {/* Tables & Results Row */}
                <TablesResultsRow />
            </VStack>

            {/* Footer */}
            <Footer />
        </Container>
    )
}

export default HomePage