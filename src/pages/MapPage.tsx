import {Button, Heading, HStack} from "@chakra-ui/react"
import {blueGrey} from "../components/colors"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"
// import WorldMap from "../components/world/WorldMap"

const MapPage = () => {
  const {
    count,
    incCount,
    decCount,
  } = useGame()

  return (
    <>
      {/*<WorldMap/>*/}
      <HStack>
        <Button
          colorPalette={"orange"}
          onClick={() => decCount(1)}
        ><RiArrowLeftSFill /></Button>
        <Button
          colorPalette={"orange"}
          onClick={() => incCount(1)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1" color={blueGrey[100]}>
          count is {count}
        </Heading>
      </HStack>
    </>
  )
}

export default MapPage
