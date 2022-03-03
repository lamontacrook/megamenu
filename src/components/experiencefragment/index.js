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

        let url = this.props.content.experienceFragment._authorUrl;
        url = url.substring(0, url.length-4);
        fetch(url + "model.json", obj)
            .then(res  => {
                res.text().then(response => { this.handleJSON(response);
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

    handleJSON(json) {
        json = JSON.parse(json)
        console.log(json[':items']['root'][':items']['container'][':items']['contentfragment']['paragraphs']);

    }
}
