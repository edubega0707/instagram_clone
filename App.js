import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { RutasNoAutenticadas } from './Components/NoAutentcados/RutasNoAutentiadas';
import { RutasAutenticadas } from './Components/Autenticados/RutasAutenticadas';
import Store from './Store/Store';
import Seleccion from './Seleccion';

console.disableYellowBox = ['Remote debugger'];
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Seleccion />
        </Provider>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
