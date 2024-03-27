import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import { remove } from "../../../slices/cartSlice"

import { Link } from "react-router-dom"

export default function Item({id, name, img, props}) {
    const isInCart = useSelector(store => store.cart.items.some((x) => x.id == id))

    return (
        <div className="shopItem">
            <div className="shopItem-ImgSpace">
            <img className="shopItem-Img" src={img} alt="not availabe."></img>
            </div>
            <ItemProps className="shopItem-props" id={id} name={name} props={props} isInCart={isInCart} />
        </div>
    )
}

function ItemProps({id, name, props, isInCart}) {
    return (
        <div className="shopItem-itemProps">
            <Link className="shopItem-header" to={"/inspect?item=" + id}>{name}</Link>
            <p className="shopItemRating">{"Rating: " + props.rating}</p>
            <p className="shopItemDescription">{props.short_description}</p>
            <p className="shopItemPrice">{props.price + "$"}</p>
            <CartOptions id={id} isInCart={isInCart}/>
        </div>
    )
}

function CartOptions({id, isInCart}) {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    if (!isInCart) {
        return
    }
    else {
        return (
            <div id="shopItemCartOptions">
                <p id="shopItemCartOptionsHeader">This item is in your cart.</p>
                <button id="shopItemCartOptionsButton" onClick={() => dispatch(remove(id))}>Remove</button>
                <button id="shopItemCartOptionsButton" onClick={() => navigate("/cart")}>Go to cart</button>
            </div>
        )
    }
}