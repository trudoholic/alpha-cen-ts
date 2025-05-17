import {blueGrey, green, grey} from "../colors"
import {cellX, cellY, gapX, gapY, HeroR, HeroC} from "./mapConstants"

const MapCell = (props) => {
  const {row, col, id, active, small} = props
  const b = small? 4: active? 2: 1

  return (
    <div
      style={{
        backgroundColor: blueGrey[200],
        border: b + "px solid " + (active? green[700]: grey[500]),
        boxSizing: "border-box",
        position: "absolute",
        top: ((cellY + gapY) * row) + "px",
        left: ((cellX + gapX) * col) + "px",
        width: cellX + "px", height: cellY + "px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "monospace, monospace",
      }}
      title={`${id}`}
    >
      {/*{`${row}:${col}`}*/}
      {`${row - HeroR}:${col - HeroC}`}
    </div>
  )
}

export default MapCell
