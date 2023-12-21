import { StatusBar } from 'react-native';
import { NewEvent } from './src/screens/NewEvent';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
      <Routes />
    </>
  );
}