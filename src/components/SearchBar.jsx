import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchClick = () => {
        console.log("Clicked search button")
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }

    return (
        <div className="search-bar">
            <input
            className="search-input"
            type="text"
            placeholder="Search for a puppy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearchClick}>Search</button>
        </div>
    )
}