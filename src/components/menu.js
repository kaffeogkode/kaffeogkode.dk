import React from "react"
import './menu.css'
import { Link } from "gatsby"

const Menu = () => {
  return (
    <>
        <nav className="menu">
            <Link to="/">Forside</Link>
            <Link to="/projekter">Projekter</Link>
            <Link to="/om-os">Om os</Link>
            <a href="https://twitch.tv/kaffeogkode">Twitch</a>
            <a href="https://twitter.com/kaffeogkode">Twitter</a>
            <a href="https://youtube.com/">YouTube</a>
            <a href="https://github.com/kaffeogkode">GitHub</a>
        </nav>
    </>
  )
}

export default Menu
