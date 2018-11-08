// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

// create a component
class Publicacion extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Publicacion</Text>
        <Button title="comentarios" onPress={() => { navigation.navigate('Comentarios'); }} />
        <Button title="autor" onPress={() => { navigation.navigate('Autor'); }} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Publicacion;
