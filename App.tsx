import React from 'react';

import { Router } from './src/routes';
import { StatusBar, Platform } from 'react-native';

export default function App() {
  return (
    <>
      {Platform.OS === 'ios' && (
        <StatusBar barStyle="light-content" backgroundColor="#0c0d0c" />
      )}

      <Router />
    </>
  );
}
