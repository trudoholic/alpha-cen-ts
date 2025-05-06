import {amber, blueGrey, grey} from "../colors"
import {cellX, cellY, gapX} from "./mapConstants"

const MapCell = (props) => {
  const {row, col, active, small} = props
  const b = small? 4: active? 2: 1

  return (
    <div
      style={{
        backgroundColor: blueGrey[200],
        border: b + "px solid " + (active? amber[700]: grey[500]),
        boxSizing: "border-box",
        position: "absolute",
        top: 0,
        left: ((cellX + gapX) * col) + "px",
        width: cellX + "px", height: cellY + "px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "monospace, monospace",
      }}
      title={`${row}:${col}`}
    >
      {`${row}:${col}`}
    </div>
  )
}

export default MapCell
