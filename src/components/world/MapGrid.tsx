import {ROWS, range} from "./mapConstants"
import MapRow from "./MapRow"

const MapGrid = (props) => {
  const {xGrid, yGrid} = props

  return (
    <div style={{
      position: "absolute",
      top: yGrid + "px", left: xGrid + "px",
    }}>
      {range(ROWS).map((p, row) => (
        <MapRow
          key={row}
          row={row}
          active={false}
        />
      ))}
    </div>
  )
}

export default MapGrid
