import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, deletePlayer } from  "../API/ajaxHelpers";




export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function allPlayersHandler() {
            const result = await fetchAllPlayers();
            // setLoading(!loading);
            setPlayers(result.players);
            setFilteredPlayers(result.players);  
        }
        allPlayersHandler();
    }, []);

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get("query");
        
        if (searchQuery) {
            const filtered = players.filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredPlayers(filtered);
            console.log("Fired from searchQuery useEffect")
        } else {
            setFilteredPlayers(players);
        }
    }, [location.search, players])

    async function handleDeletePlayer(playerId) {
        const confirmed = window.confirm("Are you sure you want to delete this player? Just checking...");
        if (confirmed) {
            try {
                await deletePlayer(playerId);
                const updatePlayers = await fetchAllPlayers();
                setPlayers(updatePlayers.players);
            } catch (error) {
                console.error("Error deleting player:", error);
            }
        }
    }

    function renderAllPlayers() {
        // console.log({ players })
        return filteredPlayers.map((player) => {
        console.log("Mapped filteredPlayers")
            return (
                <div className="player-card" key={player.id}>
                    <p className="id-tag">{`#${player.id}`}</p>
                    <h3 className="name-tag">{player.name}</h3>
                    <p>Breed:{player.breed}</p>
                    <p>Status:{player.status}</p>
                    <div className="image-container">
                        <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                    </div>
                    <button className="buttons" onClick={() => navigate(`/players/${player.id}`)} >See Details</button>
                    <button className="buttons" onClick={() => handleDeletePlayer(player.id)} >Delete Player</button>
                </div>
            ) 
        });
    }

    

    if (!players) {
        return <p>Loading Content...</p>
    }

    return ( 
        <div className="players-container">
            {renderAllPlayers()}
        </div>
    )
    
}