export default function ItemSummaryViewer({name, props}) {
    return (
        <div id="itemSummaryViewer">
            <h1 id="itemName">{name}</h1>
            <p id="itemRating">{"Rating: " + props.rating}</p>
            <p id="itemPrice">{"Price: " + props.price + "$"}</p>
            <ItemSpecs specs={props.specs} />
            <p id="itemSummary">{"Summary: " + props.summary}</p>
        </div>
    )
}

function ItemSpecs({specs}) {
    return (
        <ul id="itemSpecs">
            {specs.map((x, index) => <li className="itemSpec" key={index}>
                <span className="itemSpecKey">{x.key + ":"}</span>
                <span className="itemSpecValue">{x.value}</span>
            </li>)}
        </ul>
    )
}