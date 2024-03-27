export default function FilterOptions({setMinPrice, setMaxPrice, setMinRating}) {

    function changeMinPrice(target) {
        setMinPrice(target.value)
    }

    function changeMaxPrice(target) {
        setMaxPrice(target.value)
    }

    function changeMinRating(target) {
        setMinRating(target.value)
    }

    return (
        <div className="filterOptions">
            <h2>Filter</h2>
            <div id="filters">
                <p className="filterHeader">Min price:</p>
                <select className="filterInput" onChange={(x) => changeMinPrice(x.target)}>
                    <CreatePriceSelectValues minPrices={true} />
                </select>
                <p className="filterHeader">Max price:</p>
                <select className="filterInput" onChange={(x) => changeMaxPrice(x.target)}>
                    <CreatePriceSelectValues minPrices={false} />
                </select>
                <p className="filterHeader">Min rating:</p>
                <select className="filterInput" onChange={(x) => changeMinRating(x.target)}>
                    <CreateRatingValues/>
                </select>
            </div>
        </div>
    )
}

function CreatePriceSelectValues({minPrices}) {
    let minPriceArr = [0, 100, 300, 500, 1000, 2000, 2500, 3000]
    let maxPriceArr = [400, 600, 800, 1200, 2000, 2500, 3000, 4000, 5000, -1]

    let options = []

    if (minPrices) {
        for (let i = 0; i < minPriceArr.length; i++) {
            options.push(<option key={i} value={minPriceArr[i]}>{minPriceArr[i] + "$"}</option>)
        }
    }
    else {
        for (let i = 0; i < maxPriceArr.length; i++) {
            if (maxPriceArr[i] == -1) {
                options.push(<option key={i} value={maxPriceArr[i]}>{"unlimited"}</option>)
                continue
            }
            options.push(<option key={i} value={maxPriceArr[i]}>{maxPriceArr[i] + "$"}</option>)
        }
    }

    return options
}

function CreateRatingValues() {
    let options = []

    for (let i = 1; i <= 5; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    return options
}