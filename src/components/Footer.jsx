import React from "react";
import { Link } from "react-router-dom";




export default function Footer() {

    return (
        <div className="footer">
            <Link className="titles links" to='/team_board'>The Teams!</Link>
        </div>
    );
}