import React from "react";
import ErrorScreen from "../Error";
import Featured from "../featured";
import Navigation from "../navigation";
import Teaser from "../teaser";

export default function Entity(props) {
// console.log(props.type);
    if(props.type === 'navigation') 
        return <Navigation />
    else if(props.type === 'teaser')
        return <Teaser />
    else if(props.type === 'featured')
        return <Featured />
    else
        return <p>default</p>;

}
