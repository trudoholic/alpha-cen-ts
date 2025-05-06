import {amber, blue, blueGrey, green, grey, red} from "../colors"
import {cellX, cellY} from "./mapConstants"

const MapCell = (props) => {
  const {xCell, pCell, active, small} = props
  const cellColors = {
    R: red[500],
    G: green[500],
    B: blue[500],
    X: green[800], // Drawer
    Y: blue[800], // Door
    _: grey[300],
    '-': grey[300],
    '=': blueGrey[200],
  } as const
  // console.log('Cell:', xCell, pCell)

  const b = small? 4: active? 2: 1

  return (
    <div style={{
      backgroundColor: (cellColors[pCell] ?? grey[300]),
      border: b + "px solid " + (active? amber[700]: grey[500]),
      boxSizing: "border-box",
      position: "absolute",
      top: 0,
      left: xCell + "px",
      width: cellX + "px", height: cellY + "px",
    }}>
    </div>
  )
}

export default MapCell
