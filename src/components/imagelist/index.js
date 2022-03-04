import React, { useState } from "react";
import Image from "../image"

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
                <Image src={promo.promoImage} />
                <span className="list-item-title">{promo.promoTitle}</span>
                <span className="list-item-description">{promo.promoPretitle}</span>
              </article>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default ImageList;
