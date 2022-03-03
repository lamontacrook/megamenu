import React, { useState } from "react";

import "./index.css";

const RichText = ( {content} ) => {

    return (
        <div className={content.entityType} dangerouslySetInnerHTML={{__html: content.content.html}} />
    )
}

export default RichText;