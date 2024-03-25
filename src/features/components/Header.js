import { useNavigate } from "react-router-dom"
import Searchbar from "./Header/Searchbar"

export default function Header() {
    const navigate = useNavigate()

    return (
        <div id="header">
            <h1>E-Commerce</h1>
            <div className="headermiddle" >
                <Searchbar />
            </div>
            <button className="headerNavButton" onClick={() => navigate("/cart")}><i className="fa fa-shopping-cart"></i></button>
            <button className="headerNavButton" onClick={() => navigate("/options")}><i className="fa fa-gear"></i></button>
        </div>
    )
}