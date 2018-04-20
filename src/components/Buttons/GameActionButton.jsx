import React from 'react';

class GameActionButton extends React.Component {
  render(props) {
    return (
      <button className="btn" type="button" style={styles.gameButton} onClick={this.props.eventHandler}>
        <img style={Object.assign({}, styles.gameButtonSVG, this.props.style)} src={this.props.src} alt={this.props.value} />
      </button>
    );
  }
}

const styles = {
  gameButton: {
    background: 'rgb(211, 211, 211)',
    borderRadius: '5%'
  },
  gameButtonSVG: {
    width: '18vw',
    maxWidth: '200px'
  }
};

export default GameActionButton;
