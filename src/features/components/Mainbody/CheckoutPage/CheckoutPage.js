import { useSearchParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../../slices/cartSlice"

import { items } from "../../../Items"

import CheckoutPageBuyPanel from "./CheckoutPageBuyPanel"
import { useState } from "react"

export default function CheckoutPage() {
    const cartItems = useSelector(state => state.cart.items)
    
    let [searchParams, setSearchParams] = useSearchParams()
    let fromCart = !searchParams.has("item")
    
    const [items_, setItems_] = useState(GenItems())

    function GenItems() {
        let copy_items =[]

        if (fromCart) {
            cartItems.forEach(x => {
                let z = {item: items.find((y) => y.id == x.id), quantity: x.quantity}
                copy_items.push(z)
            });
        }
        else {
            let id = searchParams.get("item")
            let quantity = searchParams.get("qty")
            quantity = quantity == null ? 0 : quantity
    
            let item = items.find((x) => x.id == id)
    
            copy_items.push({item: item, quantity: quantity})
        }

        return copy_items
    }

    return (
        <div id="checkoutPage">
            <h1 id="checkoutPageItemsHeader">Items:</h1>
            <div id="checkoutPageItems">
                <CreateItemsFromCart items={items_} fromCart={fromCart}/>
            </div>
            <CheckoutPageBuyPanel items={items_} fromCart={fromCart} setItems={setItems_}/>
        </div>
    )
}

function CreateItemsFromCart({items, fromCart}) {
    const dispatch = useDispatch()

    if (fromCart) {
        return items.map((x, index) => 
            <div key={index} className="checkoutPageItem">
                <h1 id="checkoutPageItemHeader">{x.item.name}</h1>
                <h2 id="checkoutPageItemQuantity">{"Quantity: " + x.quantity}</h2>
                <div className="smallSeperator"/>
                <h2 id="checkoutPageItemPrice">{x.item.props.price * x.quantity}</h2>
                <button id="checkoutPageRemoveItemButton" onClick={() => dispatch(remove(x.item.id))}>Remove</button>
            </div>
        ) 
    }
    else {
        return items.map((x, index) => 
            <div key={index} className="checkoutPageItem">
                <h1 id="checkoutPageItemHeader">{x.item.name}</h1>
                <h2 id="checkoutPageItemQuantity">{"Quantity: " + x.quantity}</h2>
                <div className="smallSeperator"/>
                <h2 id="checkoutPageItemPrice">{x.item.props.price * x.quantity}</h2>
            </div>
        ) 
    }
}