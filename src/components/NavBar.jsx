import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="navbar">
            <Link to='/'>Go Home</Link>
            <Link to='/new_player_form'>Add A Puppy</Link>
        </div>
    );
}