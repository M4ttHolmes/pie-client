// Bronze:
// Create a boilerplate for a CreatePie component. Include a useState that accounts for each item in our pie model (server/backend). The default values should equal either an empty string or zero.
// Silver:
// Within the return, create a form for each item noted in the pie model. These should all have placeholders that reflect their respective items. *don't forget a submit button.
// Gold:
// Set the value of each input field to their respective states and include an onChange that allows for a user to input information and change the state of each item. Attach the component to it's parent component.


import React, {useState} from "react";
import "./CreatePie.css";

const CreatePie = (props) => {
    const [nameOfPie, setNameOfPie] = useState("");
    const [baseOfPie, setBaseOfPie] = useState("");
    const [crust, setCrust] = useState("");
    const [timeToBake, setTimeToBake] = useState(0);
    const [servings, setServings] = useState(0);
    const [rating, setRating] = useState(0);

    const postPie = (e) => {
        e.preventDefault();
        let url = "http://localhost:4000/pies/create"

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            props.setCreatePie(false);
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={postPie}>
            <input type="text" placeholder="Name of Pie" onChange={(e) => setNameOfPie(e.target.value)} value={nameOfPie} />
            <input type="text" placeholder="Base of Pie" onChange={(e) => setBaseOfPie(e.target.value)} value={baseOfPie} />
            <input type="text" placeholder="Crust" onChange={(e) => setCrust(e.target.value)} value={crust} />
            <input type="number" onChange={(e) => setTimeToBake(e.target.value)} value={timeToBake} />
            <input type="number" onChange={(e) => setServings(e.target.value)} value={servings} />
            <input type="number" onChange={(e) => setRating(e.target.value)} value={rating} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreatePie;