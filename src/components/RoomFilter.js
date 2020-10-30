import React from 'react'
import {useContext} from "react"
import {ProjectContext} from "../context"
import Title from "../components/Title"

const getUnique = (items, value) => {
    return[...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
   const context = useContext(ProjectContext)
   const{
       handleChange, type, breakfast, pets
   } =context;
   //get unique types
    let types = getUnique(rooms, "type");
   //add all
   types = ["all", ...types];
   //map to jsx
   types= types.map((item, index)=>{
       return <option value={item} key= {index}>{item}</option>
   })
    return (
        <section className="filter-container">
            <Title title ="Search-rooms"/>
            <form className="filter-form">
               {/*  select type*/} 
               <div className="form-group">
                   <label htmlFor ="type">Rooms type</label>
                   <select name ="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                   </select>
               </div>
               {/* end select type */} 
               <div classname = "form-group">
                   <div className = "single-extra">
                       <input type = "checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                            <label htmlFor ="breakfast">breakfast</label>
                   </div>
               </div>
               <div classname = "form-group">
                   <div className = "single-extra">
                       <input type = "checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                            <label htmlFor ="pets">pets</label>
                   </div>
               </div>
            </form>
        </section>
    )
}
