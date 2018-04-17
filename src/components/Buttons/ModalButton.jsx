import React from 'react';

class ModalButton extends React.Component {
    render (props) {
        return (
            <button className="btn btn-lg"
                type="button"
                data-toggle="modal"
                data-target={`#${this.props.linkModal.modalName}`}
                style={this.props.style}>
                {this.props.linkModal.heading}
            </button>
        );
    }
}

export default ModalButton;