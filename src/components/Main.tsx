import useGame from "../hooks/useGame"
import WorldMap from "./world/WorldMap"

const Main = () => {
  const {
    count,
    incCount,
    decCount,
  } = useGame()

  const flexStyle = {display: "flex", gap: "1rem", justifyContent: "center"}

  return (
    <>
      <WorldMap/>
      <div>
        <div style={flexStyle}>
          <button onClick={() => incCount(1)}>
            +
          </button>
          <button onClick={() => decCount(1)}>
            -
          </button>
        </div>
        <p>TEST PULL</p>
        <p>Lorem Ipsum Test</p>
        <p>count is {count}</p>
      </div>
    </>
  )
}

export default Main
