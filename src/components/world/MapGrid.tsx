import {ROWS, COLS, HeroR, HeroC, range} from "./mapConstants"
import MapCell from "./MapCell"

const MapGrid = (props) => {
  const {xGrid, yGrid} = props

  return (
    <div style={{
      position: "absolute",
      top: yGrid + "px", left: xGrid + "px",
    }}>
      {
        range(ROWS).map((p, row) => (
          range(COLS).map((_, col) => (
            <MapCell
              key={COLS * row + col}
              id={COLS * row + col}
              col={col}
              row={row}
              active={HeroR === row && HeroC === col}
              small={false}
            />
          ))
        ))
      }
    </div>
  )
}

export default MapGrid
