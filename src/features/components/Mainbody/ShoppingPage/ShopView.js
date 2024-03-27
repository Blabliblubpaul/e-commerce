import { items } from "../../../Items"

import { isStringEmpty } from "../../../../app/utils"

import Item from "./Item"

export default function ShopView({query, minPrice, maxPrice, minRating}) {
    let title

    if (isStringEmpty(query)) {
        title = "Products"
    }
    else {
        title = "Search results for \"" + query + "\""
    }

    return (
        <div className="shopView">
            <h1 className="shopView">{title}</h1>
            <div id="items">
                <CreateShopItems query={query} minPrice={minPrice} maxPrice={maxPrice} minRating={minRating}/>
            </div>
        </div>
    )
}

function CreateShopItems({query, minPrice, maxPrice, minRating}) {
    let searchedItems = items
    let filteredItems

    if (!isStringEmpty(query)) {
        searchedItems = items.filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
    }

    filteredItems = searchedItems.filter((x) => filterItem(x, minPrice, maxPrice, minRating))

    return filteredItems.map((x, index) => <Item key={index} id={x.id} name={x.name} img={x.img} props={x.props} />)
}

function filterItem(x, minPrice, maxPrice, minRating) {
    if (x.props.price < minPrice) {
        return false
    }
    else if (maxPrice != -1 && x.props.price > maxPrice) {
        return false;
    }
    else if (x.props.rating < minRating) {
        return false
    }
    else {return true}
}