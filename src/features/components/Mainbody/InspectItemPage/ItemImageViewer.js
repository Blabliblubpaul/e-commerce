export default function ItemImageViewer({img}) {
    return (
        <div id="itemImageViewer">
            <div id="activeImage">
                <img id="image" src={img}></img>
            </div>
        </div>
    )
}