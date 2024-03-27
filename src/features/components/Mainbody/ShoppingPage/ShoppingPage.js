import { useSearchParams } from "react-router-dom"

import ShopView from "./ShopView"
import FilterOptions from "./FilterOptions"
import { useState } from "react"

export default function ShoppingPage() {
    let [searchParams, setSearchParams] = useSearchParams()

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(-1)
    const [minRating, setMinRating] = useState(1)

    let query = searchParams.get("query")

    return (
        <div id="shoppingPage">
            <FilterOptions setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setMinRating={setMinRating} />
            <ShopView query={query} minPrice={minPrice} maxPrice={maxPrice} minRating={minRating} />
        </div>
    )
}