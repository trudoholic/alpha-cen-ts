import {grey} from "../colors"
import MapGrid from "./MapGrid"

const WorldMap = () => {
  return (
    <div style={{
      backgroundColor: grey[300],
      position: "absolute",
      // zIndex: 52,
      top: "8px", left: "8px", width: "756px", height: "756px",
      //------------------------------
      // minWidth: divWidth,
      // padding: "1rem",
      // color: "#7b9855",
      // fontFamily: "Manrope",
      // fontSize: "16px", fontWeight: 600,
    }}>
      <MapGrid
        xGrid={16}
        yGrid={16}
      />
    </div>
  )
}

export default WorldMap
