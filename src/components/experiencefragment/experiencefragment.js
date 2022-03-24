import React, { useState } from "react";

import Image from "../image/image";
import Breadcrumb from "../breadcrumb";

import "./experiencefragment.css";
import {LinkManager} from "../../utils";
import {Link} from "react-router-dom";

class ExperienceFragment extends React.Component {
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
    fetch(url + "content.html?wcmmode=disabled", obj).then((res) => {
      res.text().then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response,
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
      return (
        <div className="xf-body">
          <Image src={this.props.content.xfMainImage} />
          <Breadcrumb />
          <div className="xf-body-content">
            <article
              className="xf-content-body"
              dangerouslySetInnerHTML={{ __html: this.domParser(items) }}
            />
            {this.SideRail(this.props.content)}
          </div>
        </div>
      );
    }
  }

  domParser(item) {
    let dom = new DOMParser();
    let doc = dom.parseFromString(item, "text/html");

    for (var i in doc.getElementsByTagName("img")) {
      let src = doc.getElementsByTagName("img")[i].src;

      if (src) {
        src = src.replaceAll(
          document.location.origin,
          process.env.REACT_APP_PUBLISHER
        );
        doc.getElementsByTagName("img")[i].src = src;
      }

      for (i in doc.getElementsByTagName("link"))
        if (doc.getElementsByTagName("link")[i].parentElement)
          doc
            .getElementsByTagName("link")
            [i].parentElement.removeChild(doc.getElementsByTagName("link")[i]);
    }

    return new XMLSerializer().serializeToString(doc);
  }

  SideRail({ xfStorytoShare }) {
    return xfStorytoShare ? (
      <div className="xf-side-rail">
        <h6>SHARE THIS STORY</h6>
        <ul className="xf-side-rail-list">
          {xfStorytoShare.map((story) => (
            <li>
              <Link
                to={{
                  pathname: LinkManager(story),
                }}
              replace >
                <span className="xf-side-rail-list-title">
                  {story.screenName}
                </span>
                <span className="xf-side-rail-list-date">
                  Thursday, 9 Jul 2020
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <h6>Whoops</h6>
    );
  }
}

export default ExperienceFragment;
