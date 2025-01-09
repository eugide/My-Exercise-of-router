import { BrowserRouter, Route, Routes } from "react-router"
import Falcon from "./Pages/Falcon"
import Layout from "./Components/Layout"
import FalconHeavy from "./Pages/FalconHeavy"
// import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          {/* <Route path="/home" element={<Home />}/> */}
          <Route path="/" element={<Falcon />} />
          <Route path="/heavy" element={<FalconHeavy />} />
          
          

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
