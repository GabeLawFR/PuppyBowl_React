import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPlayer } from "../API/ajaxHelpers";



export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
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

    return (
        <>
            <h2 className="form-title">Add A New Puppy To The Roaster!</h2>
            <div className="form-container">
                <form className="ze-form" onSubmit={handleSubmit}>
                    <label className="labels">
                        Name:
                        <br />
                        <input
                        className="inputs"
                        key="name-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className="labels">
                        Breed:
                        <br />
                        <input
                        className="inputs"
                        key="breed-input"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)} 
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