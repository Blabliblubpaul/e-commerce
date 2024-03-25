import { items } from "../../../Items"

import { isStringEmpty } from "../../../../app/utils"

import Item from "./Item"

export default function ShopView({query}) {
    let title

    if (isStringEmpty(query)) {
        title = "Products"
    }
    else {
        title = "Search results for \"" + query + "\""
    }

    return (
        <div className="shopView">
            <h1>Change Props Array to Dict!</h1>
            <h1 className="shopView">{title}</h1>
            <div id="items">
                <CreateShopItems query={query} />
            </div>
        </div>
    )
}

function CreateShopItems({query}) {
    if (!isStringEmpty(query)) {
        let searchedItems = items.filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        
        return searchedItems.map((x, index) => <Item key={index} id={x.id} name={x.name} img={x.img} props={x.props} />) 
    }
    else {
        return items.map((x, index) => <Item key={index} id={x.id} name={x.name} img={x.img} props={x.props} />)
    }
}