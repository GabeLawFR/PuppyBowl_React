import React, { useState } from "react";

// SeaarchBar component getting prop from NavBar component
export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    console.log("Received onSearch1", onSearch);
    console.log("Received onSearch2", searchQuery)

    // Handles changes made to the SearchBar component's input field, updating the searchQuery state live, not onClick
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
            <p className="search-hint">Search For A Puppy By Name</p>
            <input
            className="search-input"
            type="text"
            placeholder="Search for a puppy..."
            value={searchQuery}
            onChange={handleSearchChange}
            />
        </div>
    );
}