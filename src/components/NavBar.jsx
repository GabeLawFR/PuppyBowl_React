import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";


export default function NavBar() {
    const navigate = useNavigate();

    const handleSearch = (searchQuery) => {
        navigate(`/search?query=${searchQuery}`)
    }

    return (
        <div className="navbar">
            <Link className="links" to='/'>Go Home</Link>
            <SearchBar onSearch={handleSearch} />
            <Link className="links" to='/new_player_form'>Add A Puppy</Link>
        </div>
    );
}