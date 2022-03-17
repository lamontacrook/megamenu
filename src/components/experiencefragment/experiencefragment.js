import React from "react";
import ContentFragment from "../contentfragment";
import ErrorBoundary from "../ErrorBoundary";
import "./experiencefragment.css";

export default class XF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.cf = "";
  }

  componentDidMount() {
    var obj = {
      method: "GET",
      headers: {
        "Access-Control-Request-Headers": "Authorization",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
        "Content-Type": "text/plain",
        Origin: "",
      },
      credentials: "include",
    };

    let url = this.props.content.experienceFragment._authorUrl;
    url = url.substring(0, url.length - 4);
    fetch(url + "model.json", obj).then((res) => {
      res.text().then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: JSON.parse(response),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      this.iterate(items, "");
      return (
        <ErrorBoundary>
          <div className="xf-body">
            <ContentFragment xf={this.props.content.experienceFragment._authorUrl} content={this.cf}></ContentFragment>
          </div>
        </ErrorBoundary>);
    }
  }

  iterate(obj, stack) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {
          this.iterate(obj[property], stack + "." + property);
          if (property === "contentfragment") {
            this.cf = obj;
            return;
          }
        } else {
          //if(!this.pass) console.log(this.pass + " : " + property + " :  " + obj[property]);
          //$('#output').append($("<div/>").text(stack + '.' + property))
        }
      }
    }
  }
}
