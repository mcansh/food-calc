import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title';

class Index extends Component {
  static getInitialProps = async () => {
    const isServer = typeof window === 'undefined';

    const promise = await fetch('https://api.github.com/users/mcansh');
    const user = await promise.json();

    return { isServer, user };
  };

  render() {
    return (
      <>
        <Head>
          <title>Hello World</title>
        </Head>
        <Title>Hello World</Title>

        <img
          src={this.props.user.avatar_url}
          alt={this.props.user.name}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </>
    );
  }
}

export default Index;
