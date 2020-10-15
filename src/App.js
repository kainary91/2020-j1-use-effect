import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import Counter from "./components/Counter";
import RickAndMortyApi from "./components/RickAndMortyApi";

export default function App() {
    const [count,setCount] = useState(1);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    useEffect(() => {
        if (count > 0 && count <= 10) {
            console.log("counter change: " + count);
        }
        if (count < 0 || count > 10) {
            return () => {
                console.log("counter terminated")
            }
        }
    }, [count])

    return (
        <>
            <GlobalStyle/>
            <Main>

                <RickAndMortyApi counter={count}/>

                <Counter count={count}
                         countUp={countUp}
                         countDown={countDown}/>
            </Main>
        </>
    );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;