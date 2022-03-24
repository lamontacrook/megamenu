import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";

import "./imagelist.css";
import { LinkManager } from "../../utils";


const ImageList = ({ content }) => {
  return (
    <React.Fragment>
      {content.imageListTitle && <h4>{content.imageListTitle}</h4>}
      <ul className="image-list">
        {content.imageListPromoAssets.map((promo) => (
          <li key={promo.promoTitle || promo.block[0].promoTitle} className="list-item">
            <Link
              to={{
                pathname: promo.promoScreenReference
                  ? LinkManager(promo.promoScreenReference)
                  : LinkManager(promo),
              }}
            >
              <article>
                <Image src={promo.promoImage || promo.block[0].promoImage} />
                <span className="list-item-title">{promo.promoTitle || promo.block[0].promoTitle}</span>
                <span className="list-item-description">
                  {promo.promoDescription?promo.promoDescription.plaintext : promo.block[0].promoDescription.plaintext}
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
//MapTo("ImageListModel", ImageList);
export default ImageList;
