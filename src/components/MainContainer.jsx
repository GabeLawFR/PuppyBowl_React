import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from "./NewPlayerForm";

export default function MainContainer() {
    return (
        <div className="main-container">
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='/players/:id' element={<SinglePlayer />} />
                <Route path='/new_player_form' element={<NewPlayerForm />} />
            </Routes>
        </div>
    );
}