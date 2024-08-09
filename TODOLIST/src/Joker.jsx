import { useEffect, useState } from "react";

export default function Joker(){
    let[joke , setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup : jsonResponse.setup, punchline:jsonResponse.punchline});
    };

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup : jsonResponse.setup, punchline:jsonResponse.punchline});
        }
          getFirstJoke();
    }, [] );

    return (
        <div>
            <h2><i>{joke.setup}</i></h2>
            <h2><i>{joke.punchline}</i></h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}