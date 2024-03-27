import { useSelector } from "react-redux"


import CartItem from "./CartItem"
import CartBuyPanel from "./CartBuyPanel"

export default function() {
    let items = useSelector(state => state.cart.items)

    return (
        <div>
            <h1 id="cartPageHeader">Your Cart:</h1>
            <div id="CartPage">
                <div id="items">
                    <CreateCartItems items={items}/>
                </div>
                <CartBuyPanel/>
            </div>
        </div>
    )
}

function CreateCartItems({items}) {
    return items.map((x, index) => <CartItem key={index} id={x.id} quantity={x.quantity} />)
}