import React, {useEffect, useState} from 'react';
import axios from "axios";
import RickAndMortyApi from "../RickAndMortyApi";


export default function Homepage() {

    const [visible,setVisible] = useState(true)

    if (visible) {
        return <section>

            <h1>Rick and Morty - Characters</h1>
            <button onClick={() => setVisible(!visible)}>Hier geht es zur Charakterübersicht...</button>

        </section>
    } else
    {
    return <section>

        <RickAndMortyApi/>

    </section>
    }
}