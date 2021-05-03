import React from "react";

export interface Props {
    text: string;
}

class Tag extends React.Component<Props> {
    render() {
        return <div className="tag">{this.props.text}</div>;
    }
}

export default Tag;
