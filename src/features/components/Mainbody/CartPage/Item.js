import { Link } from "react-router-dom"

export default function Item({id, name, img, props}) {
    return (
        <div className="shopItem">
            <div className="shopItem-ImgSpace">
            <img className="shopItem-Img" src={img} alt="not availabe."></img>
            </div>
            <ItemProps className="shopItem-props" id={id} name={name} props={props} />
        </div>
    )
}

function ItemProps({id, name, props}) {
    return (
        <div className="shopItem-itemProps">
            <Link className="shopItem-header" to={"/inspect?item=" + id}>{name}</Link>
            <p className="shopItemPrice">{props.price}</p>
        </div>
    )
}