import { useSearchParams } from "react-router-dom"

import ItemImageViewer from "./ItemImageViewer"
import ItemSummaryViewer from "./ItemSummaryViewer"
import ItemBuyPanel from "./ItemBuyPanel"
import ItemReviewViewer from "./ItemReviewViewer"
import { items } from "../../../Items"
import ItemDescriptionViewer from "./ItemDescriptionViewer"

export default function InspectItemPage() {
    let [searchParams, setSearchParams] = useSearchParams()

    let itemId = searchParams.get("item")

    const item = items.find((x) => x.id == itemId)

    return (
        <div id="inspectItemPage">
            <div id="itemViewer">
                <ItemImageViewer img={item.img}/>
                <ItemSummaryViewer name={item.name} props={item.props} />
                <ItemBuyPanel item={item}/>
            </div>
            <vr className="viewSeperator" />
            <div id="description">
                <ItemDescriptionViewer description={item.props.description} />
            </div>
            <vr className="viewSeperator" />
            <div id="reviews">
                <ItemReviewViewer reviews={item.props.reviews} />
            </div>
        </div>
    )
}