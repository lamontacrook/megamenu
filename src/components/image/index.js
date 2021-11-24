import React from "react";

export default function Image(props) {
    console.log(props);
    return (
        <img alt="example" src={props.props._publishUrl} />
    );

}
