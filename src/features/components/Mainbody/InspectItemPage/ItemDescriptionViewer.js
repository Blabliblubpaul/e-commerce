export default function ItemDescriptionViewer({description}) {
    return (
        <div id="itemDescriptionViewer">
            <h1>Product Description:</h1>
            <p id="itemDescription">{description}</p>
        </div>
    )
}