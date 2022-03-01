import React, { useState } from "react";

export default class XF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(process.env.REACT_APP_AUTHORIZATION));
        var obj = {
            method: 'GET' ,
            headers: {
                'Access-Control-Request-Headers': 'Authorization',
                'Authorization': 'Basic ' + btoa(process.env.REACT_APP_AUTHORIZATION),
                'Content-Type': 'text/plain',
                'Origin': ''
            },
            credentials: 'include'
          };
console.log(obj);

        fetch(this.props.content.experienceFragment._authorUrl, obj)
            .then(res  => {
                res.text().then(response => { console.log(response);
                    this.setState({
                        isLoaded: true,
                        items: response
                    });
                })},
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <span dangerouslySetInnerHTML={{__html: items}} >
                    
                </span>
            );
        }
    }
}

/*export default function XF(props) {
    return (
        <h1>{props.content.name}</h1>

    )
}*/