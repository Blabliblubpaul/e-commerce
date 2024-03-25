import { useState } from "react"

export default function ItemBuyPanel({item}) {
    const [quantity, setQuantity] = useState(1)

    function setAndBeautifyQuantity(target) {
        setQuantity(target.value)
    }

    return (
        <div id="itemBuyPanel">
            <h2 id="itemBuyPanelHeader">{item.props.price + "$"}</h2>
            <div id="itemAmountInput">
                <h3 id="itemAmountInputText">Quantity:</h3>
                <select id="itemAmountInputField"onChange={(x) => setAndBeautifyQuantity(x.target)}>
                    {CreateAmountValues(item)}
                </select>
            </div>
            <button className="buyPanelButton">Add to Cart</button>
            <button className="buyPanelButton">Buy Now</button>
        </div>
    )
}

function CreateAmountValues(item) {
    let max = item.max_buy <= item.in_stock ? item.max_buy : item.in_stock

    let options = []

    for (let i = 1; i <= max; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    return options
}