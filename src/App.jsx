import { Box } from "@chakra-ui/react"
import HomePage from "./pages/HomePage"
import PlayerPage from "./pages/PlayerPage"
import NewsPage from "./pages/NewsPage"
import MatchesPage from "./pages/MatchesPage"
import { Route, Routes } from "react-router"
import { useColorModeValue } from "./components/ui/color-mode"
import Navbar from "./components/Navbar"
import TablesPage from "./pages/TablesPage"

function App() {

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("#FFFFFF", "#063672")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/PlayerPage" element={<PlayerPage />} />
          <Route path="/MatchesPage" element={<MatchesPage />} />
          <Route path="/TablesPage" element={<TablesPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
