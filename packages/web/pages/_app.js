import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import NProgress from 'nprogress';
import withData from '../lib/withData';
import theme from '../config';
import GlobalStyles from '../components/GlobalStyles';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  };

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
