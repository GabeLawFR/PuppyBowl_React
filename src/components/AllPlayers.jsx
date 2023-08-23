import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from  "../API/ajaxHelpers";




export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    function renderAllPlayers() {
        console.log({ players })
       return players.map((player) => {
            return <p key={player.id}>{player.name}</p>
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