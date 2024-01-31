import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

/* body {
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
} */

body::-webkit-scrollbar {
    width: 1.5rem;
}

body::-webkit-scrollbar-track {
    background-color: #d24115;
}

body::-webkit-scrollbar-thumb {
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
    font-family: 'Work Sans', sans-serif;
}

h1 {
    font-size: 6rem;
    font-weight: 900;
}

h2 {
    font-size: 4.4rem;
    font-weight: 500;
    white-space: normal;
}

h3 {
    font-size: 1.8rem;
    font-weight: 500;
}

p,
button {
    color: white;
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

/* // resuable code section   */

.container {
    max-width: 120rem;
    margin: 0 auto;
}

.grid {
    display: grid;
}

.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
    grid-template-columns: repeat(4, 1fr);
}


.common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
}

.intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
}

.caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
}

input,
textarea {
    max-width: 50rem;
    color: ${({ theme }) => theme.black};
    padding: 1.6rem 2.2rem;
    border: 1px solid black;
    box-shadow: ${({ theme }) => theme.shadowSupport};
    outline: none;
}
input[type='submit'] {
    /* max-width: 16rem; */
    /* margin-top: 2rem; */
    color: white;
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
}

@media (width <= 998px) {
    .Container {
    max-width: 130rem;
    padding: 0 3.2rem;
    }
} 

@media (width <= 768px) {
    .grid {
        gap: 3.2rem;
    }
    .grid-two-column,
    .grid-three-column,
    .grid-four-column {
        grid-template-columns: 1fr;
    }
}


`;
