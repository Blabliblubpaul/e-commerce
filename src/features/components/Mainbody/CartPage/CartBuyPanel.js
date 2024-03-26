import { useNavigate } from "react-router-dom"

import { calculateCartPrice } from "../../../../app/utils"

export default function CartBuyPanel() {
    const navigate = useNavigate();

    return (
        <div id="cartBuyPanel">
            <h2 id="cartBuyPanelHeader">{calculateCartPrice() + "$"}</h2>
            <button className="buyPanelButton" onClick={() => navigate("/checkout")}>Go to checkout</button>
            <button className="buyPanelButton" onClick={() => navigate("/")}>Continue shopping</button>
        </div>
    )
}