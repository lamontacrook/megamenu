import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";

import "./article.css";
import { LinkManager } from "../../utils";
import { mapJsonRichText } from "./renderRichText";

const Article = ({ content, references }) => {
  console.log(references);
  return (
    <div className="articleBody">
      <Image src={content.articleMainImage._publishUrl} alt="article" />
      <article>
        <p>
          {mapJsonRichText(
            content.articleBody.json,
            customRenderOptions(references)
          )}
        </p>
      </article>
    </div>
  );
};

/**
 * Example of using a custom render for in-line references in a multi line field
 */
function customRenderOptions(references) {
  const renderReference = {
    // node contains merged properties of the in-line reference and _references object
    ImageRef: (node) => {
      // when __typename === ImageRef
      return <Image src={node._publishUrl} alt={"in-line reference"} />;
    },
    AdventureModel: (node) => {
      // when __typename === AdventureModel
      return (
        <Link
          to={`/adventure:${node._path}`}
        >{`${node.adventureTitle}: ${node.adventurePrice}`}</Link>
      );
    },
  };

  return {
    nodeMap: {
      reference: (node, children) => {
        // variable for reference in _references object
        let reference;

        // asset reference
        if (node.data.path) {
          // find reference based on path
          reference = references.find((ref) => ref._path === node.data.path);
        }
        // Fragment Reference
        if (node.data.href) {
          // find in-line reference within _references array based on href and _path properties
          reference = references.find((ref) => ref._path === node.data.href);
        }

        // if reference found return render method of it
        return reference
          ? renderReference[reference.__typename]({ ...reference, ...node })
          : null;
      },
    },
  };
}
export default Article;
