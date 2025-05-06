import {cellY, gapY} from "./mapConstants"
import MapRow from "./MapRow"

const MapGrid = (props) => {
  const {xGrid, yGrid, pGrid, mosaic} = props

  const n = pGrid.length - 1

  return (
    <div style={{
      position: "absolute",
      top: yGrid + "px", left: xGrid + "px",
    }}>
      {pGrid.map((p, j) => (
        <MapRow
          key={j}
          // yRow={(cellY + gapY) * j}
          yRow={(cellY + gapY) * (n - j)}
          // pRow={p}
          pRow={p? p.slice(0, 10): " "}
          active={false}
          mosaic={mosaic}
        />
      ))}
    </div>
  )
}

export default MapGrid
