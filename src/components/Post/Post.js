import React from  "react";

export default (props) => {
    if (!props.post) {
        return <></>
    }
    return <div>
        {props.post.text}
    </div>
}