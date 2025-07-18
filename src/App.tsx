import './App.scss'
import ContextProvider from "./context"

import Layout from "./components/Layout"

function App() {
  return (
    <>
      <ContextProvider>
        <Layout/>
      </ContextProvider>
    </>
  )
}

export default App
