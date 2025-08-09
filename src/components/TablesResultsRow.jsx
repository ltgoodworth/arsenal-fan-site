import { Stack } from "@chakra-ui/react"
import LeagueTable from "./LeagueTable"
import MatchResults from "./MatchResults"

const TablesResultsRow = () => {
    return (
        <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="stretch"
        >
            <LeagueTable />
            <MatchResults />
        </Stack>
    )
}

export default TablesResultsRow
