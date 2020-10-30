import React, { Component } from 'react'
// import items from "./data"
import Client from "./Contentful"
const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type: "all",
        breakfast: false,
        pets: false
    };
    getData= async ()=>{
        try{
            let response =await Client.getEntries({content_type : "torpedo"});
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room =>room.featured === true);
            console.log(response)
            this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false
        });
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData()
    }

    formatData(items){
        let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
        image.fields.file.url);

        let room = {...item.fields, images, id};
        return room;

        })
        return tempItems;
    }

    getRoom = slug =>{
        let tempRooms = [...this.state.rooms];
        const room =tempRooms.find(room=>room.slug === slug);
        return room;
    }

handleChange = event =>{ 
    const target = event.target
    const value = target.type ==="checkbox"? target.checked:target.value
    const name = event.target.name
    this.setState({
        [name]: value
    }, this.filterProjects)
}
filterProjects = () =>{
    let{
        rooms, type, breakfast, pets
    }=this.state
    let tempRooms = [...rooms];
    if(type!== "all"){
        tempRooms = tempRooms.filter(room =>room.type ===type)
    }
    if(breakfast){
        tempRooms= tempRooms.filter(room => room.breakfast===true)
    }
    if(pets){
        tempRooms= tempRooms.filter(room => room.pets===true)
    }
    this.setState({
        sortedRooms :tempRooms
    })
}
    render() {
        return (
            <ProjectContext.Provider value ={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProjectConsumer>
            {value => <Component {...props} context = {value}/>}
        </ProjectConsumer>
    }
}
export{ProjectProvider, ProjectConsumer, ProjectContext};