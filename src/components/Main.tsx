import {Button, Heading, HStack} from "@chakra-ui/react"
import {blueGrey} from "./colors"

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"

import MapPage from "../pages/MapPage"
import HeroPage from "../pages/HeroPage"

const Main = () => {
  return (
    <BrowserRouter>
      <>
        <Heading as="h1" color={blueGrey[100]}>Alpha Cen</Heading>
        <HStack as="nav">
          <NavLink to="/"><Button
            variant="ghost"
            colorPalette={"teal"} color={blueGrey[300]}
            aria-label="Map"
            my={5}
          >Map</Button></NavLink>
          <NavLink to="/hero"><Button
            variant="ghost"
            colorPalette={"teal"} color={blueGrey[300]}
            aria-label="Hero"
            my={5}
          >Hero</Button></NavLink>
        </HStack>
        <main>
          <Routes>
            <Route path="/" element={<MapPage />}/>
            <Route path="/hero" element={<HeroPage />}/>
          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}

export default Main
