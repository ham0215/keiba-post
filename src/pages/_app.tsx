import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CacheProvider, EmotionCache } from '@emotion/react';
import firebaseApp from 'firebaseApp';
import { UserContext } from 'libs/hooks/UserContext';
import theme from 'libs/theme/theme';
import { Header } from 'libs/features/Header';
import { Footer } from 'libs/features/Footer';
import { findUser, setUser, User } from 'libs/firestore/User';
import createEmotionCache from 'libs/theme/createEmotionCache';
import { Loading } from 'libs/features/Loading';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

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
            enabled: false
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
        <CssBaseline />
        {!currentUser ? (
          <Loading />
        ) : (
          <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Header currentUser={currentUser} />
            <Component {...pageProps} />
            <Footer />
          </UserContext.Provider>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}
