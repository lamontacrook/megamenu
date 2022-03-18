import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";

import "./imagelist.css";


const ImageList = ({ content }) => {
  return (
    <React.Fragment>
      {content.imageListTitle && <h4>{content.imageListTitle}</h4>}
      <ul className="image-list">
        {content.imageListPromoAssets.map((promo) => (
          <li key={promo.promoTitle} className="list-item">
            <Link
              to={{
                pathname: promo.promoScreenReference
                  ? promo.promoScreenReference._path.replaceAll("/", ":")
                  : "",
              }}
            >
              <article>
                <Image src={promo.promoImage} />
                <span className="list-item-title">{promo.promoTitle}</span>
                <span className="list-item-description">
                  {promo.promoDescription.plaintext}
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ImageList;
