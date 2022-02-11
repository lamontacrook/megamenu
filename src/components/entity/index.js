import React from "react";
import ErrorScreen from "../Error";
import Navigation from "../navigation";
import Teaser from "../teaser";

export default function Entity(props) {
// console.log(props.type);
    if(props.type === 'navigation') 
        return <Navigation />
    else if(props.type === 'teaser')
        return <Teaser />
    else
        return <p>default</p>;

}
