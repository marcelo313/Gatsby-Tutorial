import React, { useState } from "react"
import styled, {createGlobalStyle} from "styled-components"

const global = createGlobalStyle`
body {
    margin: 0;
}

`


const MenuIcon = styled.button`
position: fixed;
top: 2rem;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width 1.5rem;
height 1.5rem;
background: transparent;
border: none;
cursor: pointer;
z-index 5;

div {
    height: 1.5rem
    width: 0f.2rem
    background: black;
    border-radius: 5px:
    transform-origin: 1px;
    position: relative;
}
`

const MenuLinks = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height 100vh;
width: 100%
background: purple;
position: absolute;
top: 0;
right 0;
transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"}

ul {
    list-style-type: none;
}

li {
    margin-top: 1rem;
}

a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 400ms;

    :hover {
        color: purple;
    }
}


`



const Header = () => {

    const [nav, showNav] = useState(false)
    return (
        <div>
        <global />
        <MenuIcon onClick={() => showNav(!nav)}>
            <div/>
            <div/>
        </MenuIcon>
        <MenuLinks nav = {nav}>
            <ul>
                <li>
                    <a href="/"> Home </a>
                </li>

                <li>
                    <a href="about"> About </a>
                </li>
                <li>j
                    <a href="useful-links"> Useful Links </a>
                </li>
            </ul>
        </MenuLinks>
        </div>
        )
}











export default Header








