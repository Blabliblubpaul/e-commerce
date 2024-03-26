import { items } from "../features/Items"
import store from "./store"

export function isStringEmpty(s) {
    return (!s || !s.trim())
}

export function calculateCartPrice() {
    let items = store.getState().cart.items
    let price = 0
    
    items.forEach((x) => {
        price += calculateItemPrice(x)
    })

    return price
}

function calculateItemPrice(cartItem) {
    let item

    if (items.some((x) => x.id == cartItem.id)) {
        item = items.find((x) => x.id == cartItem.id)
    }
    else {
        console.log("error: unable to find item with id \"" + cartItem.id + "\"; skipping")
        return
    }

    return item.props.price * cartItem.quantity
}