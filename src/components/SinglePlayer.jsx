import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer, fetchAllTeams } from "../API/ajaxHelpers";




export default function SinglePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);
    const [teamName, setTeamName] = useState("")

    useEffect(() => {
        async function singlePlayerHandler() {
            const result = await fetchSinglePlayer(id);
            setPlayer(result)
            console.log("result 1", result)

            // Match players API teamId with teams API teamId to get the player's current team name
            const teams = await fetchAllTeams();
            const matchingTeam = teams.find(team => team.id === result.teamId);
            if (matchingTeam) {
                setTeamName(matchingTeam.name);
            } else {
                setTeamName("No Team Yet!")
            }
        }
        singlePlayerHandler();
    }, [id]);

    function renderSinglePlayer() {
        console.log(`Rendering Player #${id}`, player)
        return (
            <div className="player-card" key={player.id}>
                <p className="id-tag">{`#${player.id}`}</p>
                <h3 className="name-tag full-width">{player.name}</h3>
                <p className="full-width">Breed:{player.breed}</p>
                <p className="full-width">Status:{player.status}</p>
                <p className="full-width">Team: {teamName}</p>
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