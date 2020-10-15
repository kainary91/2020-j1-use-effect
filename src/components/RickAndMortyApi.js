import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function RickAndMortyApi({counter}) {

    const [character,setCharacter] = useState([]);

    let url = "https://rickandmortyapi.com/api/character/" + counter

    useEffect(() => {

        axios.get(url)
            .then(function (response) {
                // handle success
                setCharacter(response.data);
            })
            .catch(function(error) {
                console.log(error)})
    }, [counter])


    const {id, name,status, species,type,gender,image} = character;


    let message = id + " " + name + " " + status + " " + species + " " + type + " " + gender

    return <section>

        <h1>{message}</h1>
        <img src={image} alt="bild"/>

    </section>

}


