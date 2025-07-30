import Info from "./Info"
import "./Search.css"

function Search({ search, setSearch, onSubmit }: { search: string, setSearch: (input: string) => void, onSubmit: () => void }) {
    return (
        <div className="search">
            <h1>IP Address Tracker</h1>
            <div className="form">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="input"
                    type="text"
                    placeholder="Search for any IP address or domain"
                />
                <div
                    onClick={onSubmit}
                    className="arrow"
                >
                    <img src="icon-arrow.svg" alt="arrow" />
                </div>
            </div>
            <Info />
        </div>
    )
}

export default Search