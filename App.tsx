import * as React from 'react';

import { Router } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0c0d0c" />
      <Router />
    </>
  );
}
