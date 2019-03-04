// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../Seleccionarimagen';
import { actionLimpiarImagenPublicacion, actionCargarImagenPublicacion } from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

// create a component
class SeleccionarGaleria extends Component {
    static navigationOptions={
      tabBarvisible: false,
    }

    componentWillUnmount() {
      this.props.limpiarImagen();
    }


    render() {
      return (

        <View style={styles.container}>
          <View style={styles.imagen}>
            <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius />
          </View>
          <View style={styles.texto}>
            <SeleccionarGaleriaForm
              imagen={this.props.imagen.imagen}
              registro={(values) => {
                console.log(values);
              }}
            />
          </View>
          <View style={styles.boton}>
            <Button
              title="Publicar"
              onPress={() => { console.log('Publicado'); }}
            />
          </View>


        </View>
      );
    }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
  boton: {
    flex: 1,
  },
});
const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
});
const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => {
    // dispatch({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
    dispatch(actionLimpiarImagenPublicacion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
