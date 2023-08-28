import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/ajaxHelpers";




export default function SinglePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function singlePlayerHandler() {
            const result = await fetchSinglePlayer(id);
            setPlayer(result)
            console.log("result 1", result)
        }
        singlePlayerHandler();
    }, [id]);

    function renderSinglePlayer() {
        console.log(`Rendering Player #${id}`)
        return (
            <div className="player-card" key={player.id}>
                <p className="id-tag">{`#${player.id}`}</p>
                <h3 className="name-tag full-width">{player.name}</h3>
                <p className="full-width">Breed:{player.breed}</p>
                <p className="full-width">Status:{player.status}</p>
                <div className="image-container full-width">
                    <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                </div>
                <button className="buttons button-full" onClick={() => navigate('/')} >Go Back</button>
            </div>
        )
    }

    if (!player) {
        return <p>Loading Content...</p>
    }

    return (
        <div className="players-container">
            {renderSinglePlayer()}
        </div>
    )
}