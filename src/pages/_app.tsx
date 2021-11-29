import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import firebaseApp from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserContext } from 'UserContext';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { findUser, setUser, User } from 'firestore/User';
import createEmotionCache from 'createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, async (fbUser) => {
      let currentUser = null;
      if (fbUser) {
        currentUser = await findUser(fbUser.uid);
        if (!currentUser) {
          currentUser = await setUser({
            id: fbUser.uid,
            name: fbUser.displayName || '',
            url: fbUser.photoURL || '',
            enabled: false,
          });
        }
      }
      setCurrentUser(currentUser);
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Keiba Post</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </UserContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
