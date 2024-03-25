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
                <ItemSummaryViewer name={item.name} props={item.props_} />
                <ItemBuyPanel props={item.props_}/>
            </div>
            <div id="description">
                <ItemDescriptionViewer />
            </div>
            <div id="reviews">
                <ItemReviewViewer />
            </div>
        </div>
    )
}