import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Homepage from "./Homepage/Homepage";

export default function RickAndMortyApi() {

    const [count,setCount] = useState(1);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    const [visible,setVisible] = useState(true)
    const [character,setCharacter] = useState([]);

    let url = "https://rickandmortyapi.com/api/character/" + count

    useEffect(() => {

        axios.get(url)
            .then(function (response) {
                // handle success
                setCharacter(response.data);
            })
            .catch(function(error) {
                console.log(error)})
    }, [count])

    const {id, name,status, species,type,gender,image} = character;
    let message = id + " " + name + " " + status + " " + species + " " + type + " " + gender


    if (visible) {
        return <section>

            <h1>{message}</h1>
            <img src={image} alt="bild"/>

            <button onClick={countDown}>Last Character</button>
            <button onClick={countUp}>Next Character</button>
            <button onClick={() => setVisible(!visible)}>Back to Homepage</button>
        </section>
    } else
    {
        return <section>

            <Homepage/>

        </section>
    }

}




