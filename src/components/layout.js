import * as React from 'react'
import { Link } from 'gatsby'
import {
container,
heading,
navLinks,
navLinkItem,
navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
return (
    <main className={container}>
    <title>{pageTitle}</title>
    <nav>
        <ul className={navLinks}>
        <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
            Home
            </Link>
        </li>
        <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
            About
            </Link>
        </li>
        <li className={navLinkItem}>
            <Link to="/useful-links" className={navLinkText}>
            Useful Links
            </Link>
        </li>
        </ul>
    </nav>
    <h1 className={heading}>{pageTitle}</h1>
    {children}
    </main>
)
}

function changeBackground(color) {
    document.body.style.background = color;
}

useEffect(window.addEventListener("load",function() { changeBackground('gray') }));

export default Layout