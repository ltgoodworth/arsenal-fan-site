import { VStack } from "@chakra-ui/react"
import MatchEntry from "./MatchEntry"

const MatchesContainer = () => {
    // Sample data - in a real app, this would come from an API or props
    const matches = [
        {
            id: 1,
            date: "Aug 6",
            teams: "Arsenal v. Villareal",
            score: "2-3",
            isCompleted: true,
            matchReport: true
        },
        {
            id: 2,
            date: "Aug 17",
            teams: "Man Utd v. Arsenal",
            location: "A - Old Trafford",
            kickoff: "15:00",
            isCompleted: false
        },
        // Placeholder matches
        { id: 3, date: "", teams: "", isCompleted: false },
        { id: 4, date: "", teams: "", isCompleted: false },
        { id: 5, date: "", teams: "", isCompleted: false },
        { id: 6, date: "", teams: "", isCompleted: false },
        { id: 7, date: "", teams: "", isCompleted: false },
        { id: 8, date: "", teams: "", isCompleted: false }
    ]

    return (
        <VStack spacing={0} align="stretch">
            {matches.map((match) => (
                <MatchEntry
                    key={match.id}
                    date={match.date}
                    teams={match.teams}
                    score={match.score}
                    location={match.location}
                    kickoff={match.kickoff}
                    matchReport={match.matchReport}
                    isCompleted={match.isCompleted}
                />
            ))}
        </VStack>
    )
}

export default MatchesContainer
