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
import { findUser, createUser, User } from '../firestore/User';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (fbUser) => {
      let currentUser = null;
      if (fbUser) {
        currentUser = await findUser(fbUser.uid);
        if (!currentUser) {
          currentUser = await createUser({
            id: fbUser.uid,
            name: fbUser.displayName,
            enabled: true
          });
        }
      }
      setCurrentUser(currentUser);
    });
  }, []);

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
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
