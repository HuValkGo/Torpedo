import React from 'react'
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import {withProjectConsumer} from "../context"
import Loading from "./Loading"

function RoomContainer({context}){
const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>;
    }
        return(
        <div>
            <RoomFilter rooms = {rooms}></RoomFilter>
            <RoomList rooms = {sortedRooms}></RoomList>
        </div>
    );
}
export default withProjectConsumer(RoomContainer);