import React from "react";
import Image from "../image";
import "./index.css";

const ContentFragment = ({ content }) => {
  console.log(content.contentfragment);
  let n = 1;
  return (
    <div>
      <h3>{content.contentfragment.title}</h3>

      {content.contentfragment.paragraphs.map((p) => (
        <article>
          <span dangerouslySetInnerHTML={{ __html: p }} />

          <span
            dangerouslySetInnerHTML={{
              __html: blockquote(
                content.contentfragment[":items"]["par" + n++]
              ),
            }}
          />

          <img src={process.env.REACT_APP_PUBLISHER + image(content.contentfragment[":items"]["par" + n++])} />
        </article>
      ))}
    </div>
  );
};

const blockquote = (par) => {
  if (par && par[":items"] && par[":items"].text && par[":items"].text.text) {
    return par[":items"].text.text ;
  } else return (<p>nothing</p>);
};

const image = (par) => {
    if(par && par[":items"] && par[":items"].image && par[":items"].image.src) {
        console.log(par[":items"].image.src) 
        return par[":items"].image.src ;
    }
}

export default ContentFragment;
