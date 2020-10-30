import React, { Component } from 'react'
import Title from "./Title"
import user1P from "../images/2_andripilt.JPG";
import user2P from "../images/hugopilt.jpg";
export default class Services extends Component {
    state={
        services:[
            {
                icon: <img src={user1P} alt="" width="200" height="133" />,
                title: "Andri Valk",
                info:"Arhitekt"
            },
            {
                icon: <img src={user2P} alt ="" width="200" height="133" />,
                title: "Hugo Valk",
                info:"Õpilane"
            }
        ]
    }
    render() {
        return (
            <div>
                <section className="services">
                    <Title title ="Inimesed"/>
                    <div className="services-center">
                        {this.state.services.map((item,index) =>{
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
               </section>
            </div>
        )
    }
}
