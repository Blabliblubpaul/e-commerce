import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Layout from "./features/components/Layout"
import ShoppingPage from "./features/components/Mainbody/ShoppingPage/ShoppingPage"
import InspectItemPage from "./features/components/Mainbody/InspectItemPage/InspectItemPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
            <Route index element={<ShoppingPage />}/>
            <Route path="/inspect" Component={InspectItemPage}/>
            <Route path="*" element={<h1>404!</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}