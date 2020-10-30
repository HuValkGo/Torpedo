import React from 'react'
import Hero from "../components/Hero"
import Banner from  "../components/Banner"
import {Link} from "react-router-dom"
import RoomsContainer from '../components/RoomContainer'
const Projects = () => {
    return (
    <>
        <Hero hero ="roomsHero">
            <Banner title = "Meie projektid">
                <Link to ="/" className = "btn-primary">
                    Tagasi kodulehele
                </Link>
            </Banner>
            </Hero>
        <RoomsContainer/>
    </>
    )
}
export default Projects
