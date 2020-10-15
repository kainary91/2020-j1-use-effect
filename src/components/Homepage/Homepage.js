import React, {useEffect, useState} from 'react';
import RickAndMortyApi from "../RickAndMortyApi";
import styled from 'styled-components'


export default function Homepage() {

    const [visible,setVisible] = useState(true)

    if (visible) {
        return <StyledHomepage>

            <h1>Rick and Morty - Characters</h1>
            <button onClick={() => setVisible(!visible)}>Hier geht es zur Charakterübersicht</button>

        </StyledHomepage>
    } else
    {
    return <section>

        <RickAndMortyApi/>

    </section>
    }
}

const StyledHomepage = styled.section`
  h1 {
    color: white;
    text-align: center;
  }

  button {
    padding: 8px;
    background: none;
    border: 2px solid var(--nf-orange);
    border-radius: 8px;
    color: var(--nf-orange);
    text-transform: uppercase;
  }
`;