import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";

import "./imagelist.css";
import { LinkManager } from "../../utils";

const ImageList = ({ content }) => {
  /*for(var i = 0; i < content.imageListPromoAssets.length; i++) {
    if(content.imageListPromoAssets[i] && content.imageListPromoAssets[i].block[0].adventureDetailReference !== undefined) {
      
      content.imageListPromoAssets[i].block[0] = content.imageListPromoAssets[i].block[0].adventureDetailReference
    }
    console.log(content.imageListPromoAssets);
  }*/

  return (
    <React.Fragment>
      {content.imageListTitle && <h4>{content.imageListTitle}</h4>}
      <ul className="image-list">
        {content.imageListPromoAssets.map((promo) => (
          <React.Fragment>
            <li key={promo.block[0].promoTitle || promo.block[0].adventureDetailReference.promoTitle} className="list-item">
              <Link key={promo._path} to={LinkManager(promo)}>
                <article>
                  <Image
                    src={
                      promo.block[0].promoImage ||
                      promo.block[0].adventureDetailReference.promoImage
                    }
                  />
                  <span className="list-item-title">
                    {promo.block[0].promoTitle ||
                      promo.block[0].adventureDetailReference.promoTitle}
                  </span>
                  <span className="list-item-description">
                    {(promo.block[0].promoDescription &&
                      promo.block[0].promoDescription.plaintext) ||
                      (promo.block[0].adventureDetailReference &&
                        promo.block[0].adventureDetailReference.promoDescription
                          .plaintext)}
                  </span>
                </article>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ImageList;
