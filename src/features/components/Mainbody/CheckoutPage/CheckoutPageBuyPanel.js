import { useState } from "react";
import { clear } from "../../../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function CheckoutPageBuyPanel({items, fromCart, setItems}) {
    const dispatch = useDispatch()
    const [bought, setBought] = useState(false)

    function buy() {
        setBought(true)

        setItems([])

        if (fromCart) {
            dispatch(clear())
        }
    }

    function calculatePrice(items) {
        let price = 0
    
        items.forEach(x => price += x.item.props.price * x.quantity);
    
        return price
    }

    return (
        <div id="checkoutPageBuyPanel">
            <h1 id="checkoutPageBuyPanelPrice">{calculatePrice(items)}</h1>
            <button id="checkoutPageBuyPanelBuyButton" onClick={buy}>Buy</button>
            <CreateBoughtLabel bought={bought}/>
        </div>
    )
}

function CreateBoughtLabel({bought}) {
    if (bought) {
        return <h2>Purchase successful!</h2>
    }
}