import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkButton extends React.Component {
  render(props) {
    return (
      <Link to={location.pathname == '/' ? '/about' : '/'}>
        <button className="btn btn-lg" type="button" style={this.props.style}>
          {this.props.children}
        </button>
      </Link>
    );
  }
}

LinkButton.propTypes = {
  style: PropTypes.string,
  children: PropTypes.string
};

export default LinkButton;
