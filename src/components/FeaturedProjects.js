import React, { Component } from 'react'
import {ProjectContext} from "../context"
import Loading from './Loading';
import Room from "./Room"
import Title from "./Title"

export default class FeaturedProjects extends Component {
    static contextType = ProjectContext;
    render() {
        let {loading, featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className ="featured-rooms">
                <Title title ="Viimased projektid"/>
                <div className ="featured-rooms-center">
                {loading?<Loading/>:rooms}
                </div>
            </section>
        )
    }
}
