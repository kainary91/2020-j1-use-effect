import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Homepage from "./Homepage/Homepage";
import styled from "styled-components";

export default function RickAndMortyApi() {

    const [count,setCount] = useState(1);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    const [visible,setVisible] = useState(true)
    const [buttonEvent,setButtonEvent] = useState(true)
    const [number,setNumber] = useState("1")
    const [character,setCharacter] = useState([]);

    const charId = buttonEvent ? count : number;
    const url = "https://rickandmortyapi.com/api/character/" + charId

    useEffect(() => {

        axios.get(url)
            .then(function (response) {
                // handle success
                setCharacter(response.data);
            })
            .catch(function(error) {
                console.log(error)})
    }, [charId])

    const {id, name,status, species,type,gender,image} = character;
    const message = name + " " + status + " " + species + " " + type + " " + gender


    if (visible) {
        return <StyledRickAndMorty>

            <h1>{message}</h1>
            <img src={image} alt="bild"/>

            <div>

                <button onClick={countDown}>Last Character</button>
                <button onClick={countUp}>Next Character</button>
                <input min="1" max="591" type="number" value={number} onChange={event => setNumber(event.target.value)}/>
                <button onClick={() => setButtonEvent(!buttonEvent)}>Take input Value for ID</button>
                <button onClick={() => setVisible(!visible)}>Back to Homepage</button>

            </div>


        </StyledRickAndMorty>
    } else
    {
        return <section>

            <Homepage/>

        </section>
    }

}

const StyledRickAndMorty = styled.section`
  h1 {
    color: white;
    text-align: center;
  }

  div {
  display: flex;
  flex-direction: column;
  }

  input {
  margin-bottom: 2em;
  }

  img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  }

  button {
    padding: 8px;
    background: none;
    border: 2px solid var(--nf-orange);
    border-radius: 8px;
    color: var(--nf-orange);
    text-transform: uppercase;
    margin-bottom: 2em;
  }
`;




