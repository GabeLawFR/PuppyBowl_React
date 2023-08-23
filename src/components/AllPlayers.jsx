import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from  "../API/ajaxHelpers";




export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    function renderAllPlayers() {
        console.log({ players })
       return players.map((player) => {
            return (
                <div key={player.id}>
                    <p>{player.id}</p>
                    <p>{player.name}</p>
                    <p>{player.breed}</p>
                    <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                    <button>See Details</button>
                    <button>Delete Player</button>
                </div>
                
            ) 
        });
    }

    useEffect(() => {
        async function allPlayersHandler() {
            const result = await fetchAllPlayers();
            // setLoading(!loading);
            setPlayers(result.players);  
        }
        allPlayersHandler();
    }, []);

    return ( 
        <>
            {renderAllPlayers()}
        </>
    )
    
}