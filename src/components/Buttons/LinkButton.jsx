import React from 'react';
import { Link } from 'react-router-dom';

class LinkButton extends React.Component {
    render (props) {
        return (
            <Link to={location.pathname == '/' ? '/about' : '/'}>
                <button className="btn btn-lg" 
                    type="button"
                    style={this.props.style}>
                    {this.props.children}
                </button>
            </Link>
        );
    }
}

export default LinkButton;