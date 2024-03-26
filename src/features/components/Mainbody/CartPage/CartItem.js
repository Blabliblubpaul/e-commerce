import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { remove } from "../../../slices/cartSlice"

import { items } from "../../../Items"

export default function CartItem({id, quantity}) {
    const dispatch = useDispatch()

    let item = items.find((x) => x.id == id)

    return (
        <div className="cartItem">
            <div className="cartItemImgSpace">
                <img className="cartItemImg" src={item.img} alt="not availabe."></img>
            </div>
            <div id="cartItemProps">
                <Link className="cartItemHeader" to={"/inspect?item=" + id}><h1>{item.name}</h1></Link>
                <h2 id="cartItemPrice">{"Price: " + item.props.price + "$"}</h2>
                <h4 id="cartItemQuantity">{"Quantity: " + quantity}</h4>
                <button id="cartItemRemoveButton" onClick={() => dispatch(remove(item.id))}>Remove from cart</button>
            </div>
        </div>
    )
}