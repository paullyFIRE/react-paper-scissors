import React from 'react';

class ControlButton extends React.Component {
    render (props) {
        return (
            <button className="btn btn-lg" 
                type="button"
                onClick={this.props.eventHandler}
                style={this.props.style}>
                {this.props.children}
            </button>
        );
    }
}

export default ControlButton;