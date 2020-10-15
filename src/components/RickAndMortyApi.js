import React, {useEffect, useState} from "react";
import axios from 'axios';


export default function RickAndMortyApi() {
    // const axios = require('axios').default;

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(function (response) {
                // handle success
                console.log(response.data);
                console.log(response.data.results)
                setCharacter(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    const [characters, setCharacter] = useState([])

    // const {name} = characters;


    return<div>
        {characters.map(entry => <p>{entry.id}</p>)}
    </div>
}