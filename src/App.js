import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import Counter from "./components/Counter";

export default function App() {
    const [count,setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    useEffect(() => {
        if ((count > 0 && count <= 10) || (count < 0 && count >= -10)) {
            console.log("counter change: " + count);
        }
    }, [count]);


    return (
      <>
        <GlobalStyle/>
        <Main>
            {(count <= 10 && count >= -10)  && <Counter count={count}
                      countUp={countUp}
                      countDown={countDown}/>}
        </Main>
      </>
  );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;