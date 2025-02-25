import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Layout from "./features/components/Layout"
import ShoppingPage from "./features/components/Mainbody/ShoppingPage/ShoppingPage"
import InspectItemPage from "./features/components/Mainbody/InspectItemPage/InspectItemPage"
import CartPage from "./features/components/Mainbody/CartPage/CartPage"
import OptionsPage from "./features/components/Mainbody/OptionsPage/OptionsPage"
import CheckoutPage from "./features/components/Mainbody/CheckoutPage/CheckoutPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
            <Route index element={<ShoppingPage />}/>
            <Route path="/inspect" Component={InspectItemPage}/>
            <Route path="/cart" Component={CartPage}/>
            <Route path="/checkout" Component={CheckoutPage}/>
            <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}