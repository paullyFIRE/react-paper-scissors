import React from 'react';
import ModalButton from './Buttons/ModalButton';
import LinkButton from './Buttons/LinkButton';
import { Link } from 'react-router-dom';
import config from '../config';

import styles from '../styles/header.scss';

class Header extends React.Component {
    render () {
        return (
            <div className={styles.header}>
                <div>
                    <Link to='/'>
                        <h1 className={styles.title}>{config.title}</h1>
                    </Link>
                </div>
                <div className={styles.buttonWrapper}>
                    <ModalButton linkModal={config.modals.leaderboard}/>
                    <ModalButton linkModal={config.modals.games}/>
                    <LinkButton>{location.pathname == '/' ? 'About' : 'Home'}</LinkButton>
                </div>
            </div>
        );
    }
}

export default Header;