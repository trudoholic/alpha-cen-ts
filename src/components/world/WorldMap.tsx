import {grey} from "../colors"
import MapGrid from "./MapGrid"

const WorldMap = () => {
  const cellPatterns = [
    "---------------------", //0
    "X=YX=YX=YX=YX=YX=YX=Y", //1
    "=--=--=--=--=--=--=--", //2
    "Y-=Y-=Y-=Y-=Y-=Y-=Y-=", //3
    "-=--=--=--=--=--=--=-", //4
    "Y-=Y-=Y-=Y-=Y-=Y-=Y-=", //5
    "-=Y-=Y-=Y-=Y-=Y-=Y-=Y", //6
    "=-Y=-Y=-Y=-Y=-Y=-Y=-Y", //7
  ]

  return (
    <div style={{
      backgroundColor: grey[300],
      position: "absolute",
      zIndex: 52,
      top: 0, left: "50vw", width: "50vw", height: "100vh",
      //------------------------------
      // minWidth: divWidth,
      // padding: "1rem",
      // color: "#7b9855",
      // fontFamily: "Manrope",
      // fontSize: "16px", fontWeight: 600,
    }}>
      <MapGrid
        xGrid={20}
        yGrid={20}
        pGrid={cellPatterns}
        // title={cellPatterns[1]}
        title="cellPatterns"
        mosaic={0}
      />
    </div>
  )
}

export default WorldMap
