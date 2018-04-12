import React from 'react';

class MenuButton extends React.Component {
    render (props) {
        return (
            <button className="btn btn-info btn-lg" 
                type="button" 
                data-toggle="modal"
                data-target={`#${this.props.modalName}`}>
                {this.props.text}
            </button>
        );
    }
}

export default MenuButton;