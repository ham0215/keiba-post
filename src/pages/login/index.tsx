import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from '../../firebase';
import styled from 'styled-components';
import 'firebaseui/dist/firebaseui.css';

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
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => true,
        uiShown: () => {
          const loader = document.getElementById('loader');
          if (loader) loader.style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: '/terms/terms-of-service',
      privacyPolicyUrl: '/terms/privacy-policy',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  return (
    <Contents>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </Contents>
  );
}