// import liraries
import React, { Component } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SingUpForm from './Formas/SignupForm';
import { actionRegistro, actionCargarImagen, actionLimpiarImagenSignUp } from '../../Store/ACCIONES';
import SeleccionarImagen from '../Seleccionarimagen';


class SignUp extends Component {
  componentWillUnmount() {
    this.props.limpiarImagen();
  }

  registroDeUsario=(values) => {
    this.props.registro(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        <SingUpForm registro={this.registroDeUsario} imagen={this.props.imagen.imagen} />
        <Button title="registro" onPress={() => { navigation.goBack(); }} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
});

// make this component available to the app
const mapStateToProps = state => ({
  numero: state.reducerPrueba,
  imagen: state.reducerImagenSignUp,
});
const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(actionRegistro(values));
  },
  cargarImagen: (imagen) => {
    // dispatch({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, imagen });
    dispatch(actionCargarImagen(imagen));
    dispatch(blur('SignUpForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => {
    // dispatch({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
    dispatch(actionLimpiarImagenSignUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
