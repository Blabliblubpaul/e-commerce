import { useSearchParams } from "react-router-dom"

import ItemImageViewer from "./ItemImageViewer"
import ItemSummaryViewer from "./ItemSummaryViewer"
import ItemBuyPanel from "./ItemBuyPanel"
import ItemReviewViewer from "./ItemReviewViewer"
import { items } from "../../../Items"
import ItemDescriptionViewer from "./ItemDescriptionViewer"
import { useState } from "react"
import ItemAddedToCartPanel from "./ItemAddedToCartPanel"

export default function InspectItemPage() {
    const [showCartMessage, setShowCartMessage] = useState(false)
    const [addedItem, setAddedItem] = useState()
    let [searchParams] = useSearchParams()

    let itemId = searchParams.get("item")

    const item = items.find((x) => x.id == itemId)

    document.body.style.overflow = showCartMessage ? "hidden" : "auto"

    return (
        <div>
            <CreateItemAddedToCartPanel name={addedItem} showCartMessage={showCartMessage} setShowCartMessage={setShowCartMessage}/>
            <div id="inspectItemPage" >
                <div id="itemViewer">
                    <ItemImageViewer img={item.img}/>
                    <ItemSummaryViewer name={item.name} props={item.props} />
                    <ItemBuyPanel item={item} setShowCartMessage={setShowCartMessage} setAddedItem={setAddedItem}/>
                </div>
                <div className="viewSeperator" />
                <div id="description">
                    <ItemDescriptionViewer description={item.props.description} />
                </div>
                <div className="viewSeperator" />
                <div id="reviews">
                    <ItemReviewViewer reviews={item.props.reviews} />
                </div>
            </div>
        </div>
    )
}

function CreateItemAddedToCartPanel({name, showCartMessage, setShowCartMessage}) {
    if (showCartMessage) {
        return <ItemAddedToCartPanel name={name} setShowCartMessage={setShowCartMessage} />
    }
}