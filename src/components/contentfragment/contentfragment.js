import React from "react";

import "./contentfragment.css";

const ContentFragment = ({ content }) => {
  let n = 1;

  return (
    <React.Fragment>
      <div className="cf-fragement-body">
      <article className="article-body">
      <h1>{content.contentfragment.title}</h1>

      {content.contentfragment.paragraphs.map((p) => (
        <React.Fragment>
          <span id="cf-fragment" dangerouslySetInnerHTML={{ __html: p }} />

          {content.contentfragment[":items"]["par" + n] && typeof content.contentfragment[":items"]["par" + n] != "object" && <span id="blockquote"
                      dangerouslySetInnerHTML={{
                        __html: blockquote(
                          content.contentfragment[":items"]["par" + n]
                        ),
                      }}
                    />
         
          }

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

  