import useGame from "../hooks/useGame"

const Main = () => {
  const {
    count,
    incCount,
    decCount,
  } = useGame()

  const flexStyle = {display: "flex", gap: "1rem", justifyContent: "center"}

  return (
    <>
      <div>
        <div style={flexStyle}>
          <button onClick={() => incCount(1)}>
            +
          </button>
          <button onClick={() => decCount(1)}>
            -
          </button>
        </div>
        <p>Lorem Ipsum Test 123-456</p>
        <p>count is {count}</p>
      </div>
    </>
  )
}

export default Main
