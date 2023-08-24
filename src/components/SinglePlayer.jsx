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
                <h4 className="name-tag">{player.name}</h4>
                <p>{player.breed}</p>
                <div className="image-container">
                    <img src={player.imageUrl} alt={`${player.name}'s picture is missing`} />
                </div>
                <button onClick={() => navigate('/')} >Go Back</button>
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