import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import Counter from "./components/Counter";
import RickAndMortyApi from "./components/RickAndMortyApi";
import Homepage from "./components/Homepage/Homepage";

export default function App() {

    return (
        <>
            <GlobalStyle/>
            <Main>

                <Homepage/>

            </Main>
        </>
    );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;