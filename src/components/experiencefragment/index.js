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

        fetch(this.props.content.experienceFragment._publishUrl, { mode: 'no-cors' })
            .then(res  => {
                    console.log(res);
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },
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
                <span>
                    <h1>{this.props.content.name}</h1>
                    <iframe src={this.props.content.experienceFragment._publishUrl}></iframe>
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