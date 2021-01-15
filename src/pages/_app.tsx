import React, { useState, useEffect, } from 'react';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from '../firebase';
import { UserContext } from '../UserContext';
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setUser] = useState<firebase.User | null>(null);
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>keiba post</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <UserContext.Provider value={{ user: currentUser, setUser }}>
              <CssBaseline />
              <Header />
              <Component {...pageProps} />
              <Footer />
            </UserContext.Provider>
          </StyledComponentsThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
