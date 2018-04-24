import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreboardRoundLabel.scss';

class ScoreboardRoundLabel extends React.Component {
  render() {
    return (
      <label className={styles.labelWrapper}>
        {this.props.label}:&nbsp;
        <span>{this.props.secondValue ? `${this.props.firstValue} / ${this.props.secondValue}` : this.props.firstValue}</span>
      </label>
    );
  }
}

ScoreboardRoundLabel.propTypes = {
  label: PropTypes.string,
  firstValue: PropTypes.number,
  secondValue: PropTypes.number
};

export default ScoreboardRoundLabel;
