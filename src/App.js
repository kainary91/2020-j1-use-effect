import React, {useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import Counter from "./components/Counter";

export default function App() {
    const [count,setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);

    return (
      <>
        <GlobalStyle/>
        <Main>
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