import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPlayer } from "../API/ajaxHelpers";



export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("bench");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
            const newPlayer = await addNewPlayer(name, breed, status, image);
            console.log("New player created:", newPlayer);
            setName("");
            setBreed("");
            setStatus("");
            setImage("");
            navigate('/');
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


    return (
        <>
            <h2 className="form-title">Add A New Puppy To The Roaster!</h2>
            <div className="form-container">
                <form className="ze-form" onSubmit={handleSubmit}>
                    {error && <p className='error-p'>{error}</p>}
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
                    <div className="labels radios">
                        Status:
                        <br />
                        <label>
                            <input
                            type="radio"
                            name="status"
                            key="bench"
                            value="bench"
                            checked={status === "bench"}
                            onChange={(e) => setStatus(e.target.value)}
                            />
                            Bench
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="status"
                            key="field"
                            value="field"
                            checked={status === "field"}
                            onChange={(e) => setStatus(e.target.value)}
                            />
                            Field
                        </label>
                    </div>
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
                    <button className="buttons">Submit</button>

                </form>
            </div>
        </>
    );
}