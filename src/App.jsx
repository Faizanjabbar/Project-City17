import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout";
import Settings from "./Components/Settings/Settings";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {


  return (
    <>
 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
