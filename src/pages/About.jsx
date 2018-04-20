import React from 'react';
import Layout from './Layout';

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <div style={{ margin: '0 auto', width: '650px' }}>
            <h1>Hello, this is the about page!</h1>
            <p>
              lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorThisem ipsum lorem
              lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}

export default About;
