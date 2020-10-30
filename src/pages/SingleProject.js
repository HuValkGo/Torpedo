import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import SingleBanner from "../components/SingleBanner"
import {Link} from "react-router-dom"
import {ProjectContext} from "../context"
import StyledHero from "../components/StyledHero"

export default class SingleProject extends Component {
    constructor(props){
    super(props)
        
        this.state = {slug:this.props.match.params.slug, defaultBcg};
    }
    static contextType = ProjectContext;
    render() {
        const{getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className ="error">
                <h3>no such room could be found...</h3>
                <Link to ="/rooms" className ="errorbtn">back to Projects</Link>
            </div>
        }
        const{name,description, capacity, size, price, extras, breakfast, pets, images}=room;
        const [mainImg,...deafultImg] =images;
        return( 
            <>
                <StyledHero img ={mainImg|| this.state.defaultBcg}>
                    <SingleBanner title ={`${name} room`}>
                        <Link to ="/rooms" className="btn-primary">
                            back to rooms
                        </Link>
                    </SingleBanner>
                </StyledHero>
                <section className="single-room">
                    <div className = "single-room-images">
                    {deafultImg.map((item,index)=>(
                       <img key={index} src={item} alt={name}></img>
                    ))}
                    </div>
                    <div className ="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: ${size} SQFT</h6>
                            <h6>max capacity: {" "}
                            {capacity>1 ?`${capacity} people`:
                            `${capacity} person`}
                            </h6>
                            <h6>{pets? "pets allowed":"no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className ="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index)=>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
