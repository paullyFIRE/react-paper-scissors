import React from 'react';
import Layout from './Layout';

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <div style={{ margin: '0 auto', width: '80%' }}>
            <div className="lead" style={{ paddingTop: '40px' }}>
              <p>This is an implementation of Rock Paper Scissors using ReactJS and Redux.</p>
              <p>
                This project grew quite steadily in size and complexity as it developed. Making a game that is engaging, aesthetically
                pleasing, and most-importantly - simple - can be challenging.
              </p>
              <p>The front-end was built with:</p>
              <ul>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>JQuery (animations)</li>
                <li>Bootstrap 3</li>
                <li>CSS Modules / SCSS / PostCSS</li>
                <li>Parcel builder and bundler</li>
              </ul>
              <p>The backend was built with:</p>
              <ul>
                <li>ExpressJS</li>
                <li>MYSQL</li>
              </ul>
              <p>Game records can be viewed at the following API endpoints:</p>
              <ul>
                <li>
                  <a href="/games/all" target="_blank">
                    /games/all
                  </a>
                </li>
                <li>
                  <a href="/games/leaderboard" target="_blank">
                    /games/leaderboard
                  </a>
                </li>
              </ul>
              <p>Hosted on Google Cloud Platform (SQL), and Digital Ocean.</p>
              <p>
                The repo will soon be available on <a href="https://github.com/paullyFIRE/react-paper-scissors">Github</a>.
              </p>
            </div>
          </div>
          <br/>
        </Layout>
      </div>
    );
  }
}

export default About;
