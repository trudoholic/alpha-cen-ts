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
        <p>count is {count}</p>
        <p>Dolor Sit Amet Test 2</p>
      </div>
    </>
  )
}

export default Main
