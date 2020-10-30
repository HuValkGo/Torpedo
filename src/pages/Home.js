import React from 'react'
import Hero from "../components/Hero"
import Banner from"../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedProjects from "../components/FeaturedProjects"

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title = "Arhitektuur" subtitle="TEKST">
                    <Link to ="/rooms" className ="btn-primary">
                    Meie Projektid
                    </Link>
                </Banner>
            </Hero>
        <Services></Services>
        <FeaturedProjects/>
        </>
    );
}
