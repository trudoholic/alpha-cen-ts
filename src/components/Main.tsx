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
        <h1>Alpha Cen</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Map</NavLink></li>
            <li><NavLink to="/hero">Hero</NavLink></li>
          </ul>
        </nav>
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
