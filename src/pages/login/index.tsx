import { useEffect } from 'react';
import firebaseApp from 'firebaseApp';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import styled from '@emotion/styled';
import 'firebaseui/dist/firebaseui.css';
import CircularProgress from '@mui/material/CircularProgress';

const Contents = styled.div`
  background: #151515 url('/images/login.jpg') no-repeat scroll center bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 130px 0;
`;

export default function Login() {
  useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(getAuth(firebaseApp));
    }
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => true,
        uiShown: () => {
          const loader = document.getElementById('loader');
          if (loader) loader.style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [GoogleAuthProvider.PROVIDER_ID],
      tosUrl: '/terms/terms-of-service',
      privacyPolicyUrl: '/terms/privacy-policy'
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  if (!process.browser) {
    return <CircularProgress />;
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const firebaseui = require('firebaseui');

  return (
    <Contents>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </Contents>
  );
}
