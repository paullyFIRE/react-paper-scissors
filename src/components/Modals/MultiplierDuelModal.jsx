import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import DuelModal from './DuelModal';
import styles from './MultiplierDuelModal.scss';

class MultiplierDuelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default: {
        slider: styles.sliderSchemeInitial
      },
      results: {
        WON: {
          slider: styles.sliderSchemeWin,
          points(score) {
            return score * 2;
          }
        },
        LOST: {
          slider: styles.sliderSchemeLose,
          points: 0
        },
        DREW: {
          slider: styles.sliderSchemeDraw,
          points: 0
        }
      }
    };
  }

  render() {
    return <DuelModal modal={this.props.modal} results={this.state.results} default={this.state.default} />;
  }
}

MultiplierDuelModal.propTypes = {
  modal: PropTypes.object
};

const mapState = state => {
  return {
    modal: config.modals.multiplierModal
  };
};

export default connect(mapState)(MultiplierDuelModal);
