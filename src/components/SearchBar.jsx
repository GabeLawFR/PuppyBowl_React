import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
    // const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    console.log("Received onSearch1", onSearch);
    console.log("Received onSearch2", searchQuery)

    const handleSearchChange = (event) => {
        const newQuery = event.target.value;
        console.log("Typing in search bar", newQuery)
        setSearchQuery(newQuery);
        if (onSearch) {
            onSearch(newQuery);
        }
    };
    

    return (
        <div className="search-bar">
            <input
            className="search-input"
            type="text"
            placeholder="Search for a puppy..."
            value={searchQuery}
            onChange={handleSearchChange}
            />
            {/* <button className="search-button" onClick={handleSearchClick}>Search</button> */}
        </div>
    )
}