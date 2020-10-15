import React, {useEffect, useState} from "react";
import axios from 'axios';


export default function RickAndMortyApi() {
    // const axios = require('axios').default;

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/2')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setCharacter(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    const [character, setCharacter] = useState([])

    const {name, id} = character;


    return<div>
        {name}
        {id}
    </div>
}