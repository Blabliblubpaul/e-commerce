import Searchbar from "./Header/Searchbar"

export default function Header() {
    return (
        <div id="header">
            <h1>E-Commerce</h1>
            <div className="headermiddle" >
                <Searchbar />
            </div>
            <button>Stuff</button>
            <button>Options</button>
        </div>
    )
}