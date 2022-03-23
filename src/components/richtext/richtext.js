import React from "react";

import "./richtext.css";


const RichText = ( {content} ) => {

    return (
        <div className={content.entityType} dangerouslySetInnerHTML={{__html: content.content.html}} />
    )
}

export default RichText;