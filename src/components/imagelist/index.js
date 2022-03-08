import React from "react";
import Image from "../image"
import { Link, useParams } from "react-router-dom";

import "./index.css";

const ImageList = ({ content }) => {
  return (
    <div className="imagelist">
      <div className="floater">
        <ul className="image-list">

          {content.imageListPromoAssets.map((promo) => (
            <li key={promo.promoTitle} className="list-item">
              <Link to={{
                pathname: promo.promoScreenReference?promo.promoScreenReference._path.replaceAll('/',':'):''}} >
              <article>
                <Image src={promo.promoImage} />
                <span className="list-item-title">{promo.promoTitle}</span>
                <span className="list-item-description">{promo.promoPretitle}</span>
              </article></Link>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default ImageList;
