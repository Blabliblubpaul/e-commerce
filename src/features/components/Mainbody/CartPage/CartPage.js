import { items } from "../../../Items"

import { isStringEmpty } from "../../../../app/utils"

import Item from "./Item"

export default function() {
    return (
        <div id="OptionsPage">
            <h1>Your Cart:</h1>
            <div id="items">
                <CreateCartItems/>
            </div>
        </div>
    )
}

function CreateCartItems({query}) {
    if (!isStringEmpty(query)) {
        let searchedItems = items.filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        
        return searchedItems.map((x, index) => <Item key={index} id={x.id} name={x.name} img={x.img} props={x.props} />) 
    }
    else {
        return items.map((x, index) => <Item key={index} id={x.id} name={x.name} img={x.img} props={x.props} />)
    }
}