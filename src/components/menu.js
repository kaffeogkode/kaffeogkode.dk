import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faYoutube, faTwitch, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faClipboardList, faPoo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './menu.css'
import { Link } from "gatsby"

library.add(fab, faYoutube, faTwitch, faTwitter, faGithub, faHome, faClipboardList, faPoo )

const Menu = () => {
  return (
    <>
        <nav className="menu">
            <Link to="/" title="Forside"><FontAwesomeIcon icon="home" /></Link>
            <Link to="/projekter" title="Projekter"><FontAwesomeIcon icon="clipboard-list" /></Link>
            <Link to="/om-os" title="Om Kaffe &amp; Kode"><FontAwesomeIcon icon="poo" /></Link>
            <a href="https://twitch.tv/kaffeogkode" title="Vores Twitch-kanal"><FontAwesomeIcon icon={["fab", "twitch"]} /></a>
            <a href="https://twitter.com/kaffeogkode" title="Vores Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
            <a href="https://www.youtube.com/channel/UCnvLGoN3BB5OZdY0XW6IMtw" title="Vores YouTube-kanal"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
            <a href="https://github.com/kaffeogkode" title="Vores GitHub"><FontAwesomeIcon icon={["fab", "github"]} /></a>
        </nav>
    </>
  )
}

export default Menu
