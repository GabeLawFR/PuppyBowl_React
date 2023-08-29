import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPlayer, fetchAllTeams } from "../API/ajaxHelpers";



export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("bench");
    const [image, setImage] = useState();
    const [error, setError] = useState(null);
    const [teamId, setTeamId] = useState();
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();
    

    // useEffect(() => {
    //     console.log("Selected Team ID:", selectedTeamId);
    //     async function handleTeams() {
    //         try {
    //             const teams = await fetchAllTeams();
    //             setTeams(teams);

    //             // Create a mapping of team names to IDs
    //             const map = {};
    //             teams.forEach((team) => {
    //                 map[team.name] = team.id;
    //             });
    //             setTeamIdMap(map);
    //             console.log("Team ID Map:", map);
    //         } catch (error) {
    //             console.error("Problem handling teams:", error);
    //         }
    //     }
    //     handleTeams();
    // }, []);

    // useEffect(() => {
    //     console.log("Selected Team ID:", selectedTeamId);
    // }, [selectedTeamId]);

    
    useEffect(() => {
        handleTeams()
        async function handleTeams() {
            try {
                const teams = await fetchAllTeams();
                console.log("HandleTeams:", teams)
                setTeams(teams);
            } catch (error) {
                console.error("Problem handling teams:", error);
            }
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        // Gives error if name or breed too short, and returns to exit function if condition not met
        if (name.length < 2) {
            setError('Username must be at least 2 characters or more!');
            return;
        }

        if (breed.length < 2) {
            setError('Breed must be at least 2 characters or more!');
            return;
        }

        try {
            const newPlayer = await addNewPlayer(name, breed, status, image, teamId);
            console.log("New player created:", newPlayer);
            setName("");
            setBreed("");
            setStatus("bench");
            setImage();
            setTeamId();
            navigate('/');
            console.log("try image:", image);
            console.log("try player added selectedId:", teamId);
        } catch (error) {
            console.error("Couldn't create player:", error);
        }
    };

    // If more characters are added after the error message, the message goes away, and the error is set back to ('')
    const handleNameChange = (event) => {
        setError(null);
        setName(event.target.value);
    };

    const handleBreedChange = (event) => {
        setError(null);
        setBreed(event.target.value);
    };

    const handleTeamChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        console.log("Handle id1:", selectedValue);
        setTeamId(selectedValue);
        console.log("Handle selectedTeamId:", teamId)
    };

    // const handleTeamChange = (event) => {
    //     const selectedValue = event.target.value;
    //     console.log(selectedValue)
    //     setTeamId(selectedValue); // Store the selected team ID
    // };
    


    // const handleTeamChange = (event) => {
    //     setSelectedTeamId(event.target.value === "none" ? null : event.target.value);
    //     console.log(selectedTeamId)
    // }


    return (
        <>
            <h2 className="form-title">Add A New Puppy To The Roaster!</h2>
            <div className="form-container">
                <form className="ze-form" onSubmit={handleSubmit}>
                    {error && <p className='error-p'>{error}</p>}
                    <div>
                        <p className="labels">Status:</p>
                            <label  className="radio">
                                <input
                                type="radio"
                                key="bench"
                                value="bench"
                                checked={status === "bench"}
                                onChange={(e) => setStatus(e.target.value)}
                                />
                                Bench
                            </label>
                            <label  className="radio">
                                <input
                                type="radio"
                                key="field"
                                value="field"
                                checked={status === "field"}
                                onChange={(e) => setStatus(e.target.value)}
                                />
                                Field
                            </label>
                    </div>
                    {/* Create radio buttons map from available teams, if more added, more will show as possible options */}
                    <div>
                        <p className="labels">Select a Team:</p>
                            {/* <label  className="radio">
                                <input
                                key="No Team"
                                type="radio"
                                value="none"
                                checked={teamId === }
                                onChange={handleTeamChange}
                                />
                                No Team
                            </label> */}
                        {teams.map((team) => (
                            <label  className="radio" key={team.id}>
                            <input
                                type="radio"
                                value={team.id}
                                checked={teamId === team.id}
                                onChange={handleTeamChange}
                                />
                                {team.name}
                            </label>
                        ))}
                    </div>
                    <label className="labels">
                        Name:
                        <br />
                        <input
                        className="inputs"
                        key="name-input"
                        placeholder="What's its little name?.."
                        value={name}
                        onChange={handleNameChange}
                        />
                    </label>
                    <label className="labels">
                        Breed:
                        <br />
                        <input
                        className="inputs"
                        key="breed-input"
                        placeholder="What kind of dog is it?.."
                        value={breed}
                        onChange={handleBreedChange} 
                        />
                    </label>
                    
                    <label className="labels">
                    Image URL Link:
                        <br />
                        <input
                        className="inputs"
                        key="image-input"
                        placeholder="Enter full URL of desired imaged..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                    <button className="buttons sub-button">Submit</button>

                </form>
            </div>
        </>
    );
}