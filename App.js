import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import CountContextProvider from './src/countcont';
import { useCountContext } from './src/countcont';
import Mainscreen from './src/mainscreen';

export default function App() {


  const CountContext= useCountContext();
  console.log(CountContext);

  return (
    
    <CountContextProvider>
    <Mainscreen>

    </Mainscreen>
    </CountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {

        
    backgroundColor:"yellow"

  },
  bg: {
    marginTop:50,
    backgroundColor: '#ffea00',
    padding:50

  }
});