import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  :root {
    --nf-blue: #193251;
    --nf-orange: #ff5a36;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 112.5%;
    margin: 0;
    font-family: sans-serif;
    background: var(--nf-blue);
  }

  button {
    font-size: 1em;
  }
`;