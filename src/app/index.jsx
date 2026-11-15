import React from 'react';
import { Redirect } from 'expo-router';
import { START_SCREEN } from '../screens';

export default function Index() {
  return <Redirect href={`/${START_SCREEN}`} />;
}
