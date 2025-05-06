import {COLS, cellY, gapY, range} from "./mapConstants"
import MapCell from "./MapCell"

const MapRow = (props) => {
  const {row, active} = props

  return (
    <div style={{
      position: "absolute",
      top: ((cellY + gapY) * row) + "px", left: 0,
    }}>
      {range(COLS).map((_, col) => (
        <MapCell
          key={col}
          col={col}
          row={row}
          pCell={'='}
          active={active}
          small={false}
        />
      ))}
    </div>
  )
}

export default MapRow
