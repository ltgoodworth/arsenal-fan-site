import HomePage from "./pages/HomePage"
import PlayerPage from "./pages/PlayerPage"
import { Route, Routes } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PlayerPage" element={<PlayerPage />} />
      </Routes>
    </>
  )
}

export default App
