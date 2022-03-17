import Breadcrumb from "../breadcrumb";
import React from "react";
import Image from "../image/image";
import "./contentfragment.css";

const ContentFragment = ({ content }) => {
  let n = 1;

  return (
    <React.Fragment>
      <Image src="https://wknd.site/us/en/magazine/arctic-surfing/_jcr_content/root/container/image.coreimg.60.1600.jpeg/1594310091492/surfer-back-from-the-ocean.jpeg" />

      <Breadcrumb     />
      <div className="cf-fragement-body">
      <article className="article-body">
      <h1>{content.contentfragment.title}</h1>

      {content.contentfragment.paragraphs.map((p) => (
        <React.Fragment>
          <span dangerouslySetInnerHTML={{ __html: p }} />

          <span
            dangerouslySetInnerHTML={{
              __html: blockquote(
                content.contentfragment[":items"]["par" + n]
              ),
            }}
          />

          {content.contentfragment[":items"]["par" + n] && (
            <img
              alt="inline"
              className="cf-image"
              src={
                process.env.REACT_APP_PUBLISHER +
                image(content.contentfragment[":items"]["par" + n++])
              }
            />
          )}
        </React.Fragment>
      ))}
      </article>
      </div>
      </React.Fragment>
  );
};

const blockquote = (par) => {
  if (par && par[":items"] && par[":items"].text && par[":items"].text.text) {
    return par[":items"].text.text;
  } else return <p>nothing</p>;
};

const image = (par) => {
  if (par && par[":items"] && par[":items"].image && par[":items"].image.src) {
    console.log(par[":items"].image.src);
    return par[":items"].image.src;
  }
};

export default ContentFragment;

    function breadcrumb({}) {
      return (<nav className="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-list-item">Magazine</li>
          <li className="breakcrumb-list-item">Artic Surfing</li>
        </ol>
      </nav>);
    }
  