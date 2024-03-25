export default function ItemSummaryViewer({name, props}) {
    return (
        <div id="itemSummaryViewer">
            <h1 id="itemName">{name}</h1>
            <p id="itemRating">{"Rating: " + props.rating}</p>
            <p id="itemPrice">{"Price: " + props.price + "$"}</p>
            <p id="itemSpecs">{"Specs (make it an array!): " + props.specs}</p>
            <p id="itemSummary">{"Summary: " + props.summary}</p>
        </div>
    )
}