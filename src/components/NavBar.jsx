import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// onSearch passed down from App component, passing it down to SearchBar component
export default function NavBar({ onSearch }) {

    return (
        <div className="navbar">
            <Link className="titles links" to='/'>Go Home</Link>
            <SearchBar onSearch={onSearch} />
            <Link className="titles links" to='/new_player_form'>Add A Puppy</Link>
        </div>
    );
}