import {cellX, gapX} from "./mapConstants"
import MapCell from "./MapCell"

const MapRow = (props) => {
  const {yRow, pRow, active, mosaic} = props
  // console.log('Row:', yRow, pRow)

  const small = i => 1 === mosaic && !((i + 2) % 3)
    || 2 === mosaic && (i % 2)
    || 3 === mosaic && ((i + 2) % 3)

  return (
    <div style={{
      position: "absolute",
      top: yRow + "px", left: 0,
    }}>
      {pRow.split('').map((p, i) => (
        <MapCell
          key={i}
          xCell={(cellX + gapX) * i}
          pCell={p}
          active={active}
          small={small(i)}
        />
      ))}
    </div>
  )
}

export default MapRow
