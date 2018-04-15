import React from 'react';

class LinkButton extends React.Component {
    render (props) {
        return (
            <button className="btn btn-lg" 
                type="button"
                style={this.props.style}>
                {this.props.children}
            </button>
        );
    }
}

export default LinkButton;