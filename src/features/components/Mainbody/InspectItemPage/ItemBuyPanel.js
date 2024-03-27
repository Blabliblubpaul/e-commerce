import { useDispatch, useSelector } from "react-redux"
import { insert, remove } from "../../../slices/cartSlice"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ItemBuyPanel({item, setShowCartMessage, setAddedItem}) {
    const [quantity, setQuantity] = useState(1)
    const isInCart = useSelector(state => state.cart.items.some((x) => x.id == item.id))

    const navigate = useNavigate()

    function setQuantityValue(target) {
        setQuantity(target.value)
    }

    return (
        <div id="itemBuyPanel">
            <h2 id="itemBuyPanelHeader">{item.props.price + "$"}</h2>
            <div id="itemAmountInput">
                <h3 id="itemAmountInputText">Quantity:</h3>
                <select id="itemAmountInputField" onChange={(x) => setQuantityValue(x.target)}>
                    {CreateQuantityValues(item)}
                </select>
            </div>
            <CreateCartButton isInCart={isInCart} item={item} quantity={quantity} setShowCartMessage={setShowCartMessage} setAddedItem={setAddedItem}/>
            <button className="buyPanelButton" onClick={() => navigate("/checkout?item=" + item.id + "&qty=" + quantity)}>Buy Now</button>
        </div>
    )
}

function CreateCartButton({isInCart, item, quantity, setShowCartMessage, setAddedItem}) {
    const dispatch = useDispatch()

    function addToCart() {
        dispatch(insert({id: item.id, quantity: quantity}))
        setAddedItem(item.name)
        setShowCartMessage(true)
    }

    if (!isInCart) {
        return <button className="buyPanelButton" onClick={() => addToCart()}>Add to Cart</button>
    }
    else {
        return <button className="buyPanelButton" onClick={() => dispatch(remove(item.id))}>Remove from Cart</button>
    }
}

function CreateQuantityValues(item) {
    let max = item.max_buy <= item.in_stock ? item.max_buy : item.in_stock

    let options = []

    for (let i = 1; i <= max; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    return options
}