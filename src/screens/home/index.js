import React from "react";
import Entity from "../../components/entity";

export default function Home(props) {
  return (
    <div class="grid-container">
      <div class="header">test</div>
      <div className="left row2">
        <img
          src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
          width="96"
        />
      </div>
      <div className="middle row2"><Entity type="navigation" /></div>

      <div className="right row2">
        <input
          class="search"
          data-cmp-hook-search="input"
          type="text"
          name="fulltext"
          placeholder="Search"
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-invalid="false"
          aria-expanded="false"
          aria-owns="cmp-search-results-0"
        />
      </div>

      <div className="block1">
        <Entity type="teaser" />
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}
