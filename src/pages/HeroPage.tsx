import {Heading} from "@chakra-ui/react"
import {blueGrey} from "../components/colors"
// import useGame from "../hooks/useGame"

const HeroPage = () => {
  // const {
  //   count,
  //   incCount,
  //   decCount,
  // } = useGame()

  return (
    <>
      <Heading as="h1" color={blueGrey[100]}>Hero Page</Heading>
    </>
  )
}

export default HeroPage
