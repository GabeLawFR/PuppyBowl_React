import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from  "../API/ajaxHelpers";




export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function allPlayersHandler() {
            const result = await fetchAllPlayers();
            // setLoading(!loading);
            setPlayers(result.players);  
        }
        allPlayersHandler();
    }, []);

    function renderAllPlayers() {
        // console.log({ players })
       return players.map((player) => {
            return (
                <div className="player-card" key={player.id}>
                    <p className="id-tag">{`#${player.id}`}</p>
                    <h4 className="name-tag">{player.name}</h4>
                    <p>Breed:{player.breed}</p>
                    <p>Status:{player.status}</p>
                    <div className="image-container">
                        <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                    </div>
                    <button className="buttons" onClick={() => navigate(`/players/${player.id}`)} >See Details</button>
                    <button className="buttons">Delete Player</button>
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