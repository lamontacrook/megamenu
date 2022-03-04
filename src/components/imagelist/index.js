import React, { useState } from "react";
import RichText from "../richtext";

import "./index.css";

const ImageList = ({ content }) => {
  content.imageListPromoAssets.map((promo) => {
    console.log(promo.promoTitle);
  });

  

  return (
    <div className="imagelist">
      <div className="floater">
        <ul className="image-list">

          {content.imageListPromoAssets.map((promo) => (
            <li className="list-item">
              <article>
                <img src="https://wknd.site/us/en/magazine/guide-la-skateparks/_jcr_content/root/container/container/contentfragment/par2/image_copy.coreimg.60.1600.png/1601512687085/article-01-picture-01.png" />
                <span className="list-item-title">{promo.promoTitle}</span>
                <span className="list-item-description">
                  Breaking down the top skate destinations in all of Los
                  Angeles. You don't want to miss this!
                </span>
              </article>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default ImageList;
