import { useSearchParams } from "react-router-dom"

import { isStringEmpty } from "../../../../app/utils"

import ShopView from "./ShopView"
import FilterOptions from "./FilterOptions"

export default function ShoppingPage() {
    let [searchParams, setSearchParams] = useSearchParams()

    let query = searchParams.get("query")

    return (
        <div id="shoppingPage">
            <FilterOptions />
            <ShopView query={query} />
        </div>
    )
}