import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ItemAddedToCartPanel({name, setShowCartMessage}) {
    const [example, setExample] = useState(false)

    const navigate = useNavigate()

    function navigateAndReEnableScrolling(target) {
        document.body.style.overflow = "auto"
        navigate(target)
    }

    return (
        <div id="itemAddedToCartPanelBackground">
            <div id="itemAddedToCartPanel">
                <h1 id="cartPanelHeader">{name} added to cart!</h1>
                <div id="cartPanelNavButtons">
                    <button className="cartPanelButton" id="cartPanelCartButton" onClick={() => navigateAndReEnableScrolling("/cart")}>Go to cart</button>
                    <button className="cartPanelButton" id="cartPanelCheckoutButton" onClick={() => navigateAndReEnableScrolling("/checkout")}>Go to checkout</button>
                </div>
                <button className="cartPanelButton" id="cartPanelCloseButton" onClick={() => setShowCartMessage(false)}>Close</button>
            </div>
        </div>
    )
}