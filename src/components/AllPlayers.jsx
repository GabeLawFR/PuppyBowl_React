import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, deletePlayer } from  "../API/ajaxHelpers";

// searchQuery passed from MainContainer component
export default function AllPlayers({ searchQuery }) {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function allPlayersHandler() {
            const result = await fetchAllPlayers();
            // setLoading(!loading);
            setPlayers(result.players);
            setFilteredPlayers(result.players);  
        }
        allPlayersHandler();
    }, []);
    
    // useEffect to filter through players to match with the searchBar's query using .filter(). If a match is found, filtered is updated and then rendered, if nothing, then players is rendered
    useEffect(() => {
            console.log("SearchQuery pre filter", searchQuery)
            if (searchQuery) {
            const filtered = players.filter((player) => 
              player.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPlayers(filtered);
            console.log("useEffect post filter", filtered)
            } else {
            setFilteredPlayers(players);
            }
    }, [players, searchQuery]);
    
    // Function to delete player when delete button is clicked and info message is confirmed, aided by ajax API delete function
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
        // console.log(filteredPlayers)
            return (
                <div className="player-card" key={player.id}>
                    <p className="id-tag">{`#${player.id}`}</p>
                    <h3 className="name-tag full-width">{player.name}</h3>
                    <p className="full-width">Breed:{player.breed}</p>
                    <p className="full-width">Status:{player.status}</p>
                    <div className="image-container full-width">
                        <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                    </div>
                    <button className="buttons button1" onClick={() => navigate(`/players/${player.id}`)} >See Details</button>
                    <button className="buttons button2" onClick={() => handleDeletePlayer(player.id)} >Delete Player</button>
                </div>
            );
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