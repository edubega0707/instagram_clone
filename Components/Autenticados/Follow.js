// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

// create a component
class Follow extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
        <Button title="Autor" onPress={() => { navigation.navigate('Autor'); }} />

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
export default Follow;
