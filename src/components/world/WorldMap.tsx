import {grey} from "../colors"
import {MapW, MapH, GridX, GridY} from "./mapConstants"
import MapGrid from "./MapGrid"

const WorldMap = () => {
  return (
    <div style={{
      backgroundColor: grey[300],
      position: "absolute",
      // zIndex: 52,
      top: "8px", left: "8px",
      width: MapW + "px", height: MapH + "px",
      //------------------------------
      // minWidth: divWidth,
      // padding: "1rem",
      // color: "#7b9855",
      // fontFamily: "Manrope",
      // fontSize: "16px", fontWeight: 600,
    }}>
      <MapGrid
        xGrid={GridX}
        yGrid={GridY}
      />
    </div>
  )
}

export default WorldMap
