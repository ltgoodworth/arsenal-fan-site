import { VStack, HStack, Box, Stack } from "@chakra-ui/react"
import PremierLeagueTable from "./PremierLeagueTable"
import ChampionsLeagueTable from "./ChampionsLeagueTable"
import FaCupFixtures from "./FaCupFixtures"
import LeagueCupFixtures from "./LeagueCupFixtures"

const TablesContainer = () => {
    return (
        <VStack spacing={6} align="stretch">
            {/* Premier League Table - Large, top section */}
            <PremierLeagueTable />

            {/* Bottom section - Champions League on left, Cup fixtures on right */}
            <Stack
                direction={{ base: "column", md: "row" }}
                spacing={6}
                align="stretch"
            >
                {/* Champions League Table - Medium, bottom-left */}
                <ChampionsLeagueTable />

                {/* Cup fixtures - Small, right side */}
                <VStack spacing={4} align="stretch" flex={1}>
                    <FaCupFixtures />
                    <LeagueCupFixtures />
                </VStack>
            </Stack>
        </VStack>
    )
}

export default TablesContainer
