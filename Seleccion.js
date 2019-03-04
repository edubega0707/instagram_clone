// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/Firebase';
import { RutasAutenticadas } from './Components/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Components/NoAutentcados/RutasNoAutentiadas';
import { acionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';

// create a component
class Seleccion extends Component {
  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    console.log(this.props.usuario)
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAutenticadas />
          : <RutasNoAutenticadas />
    }

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

const mapStateToProps = state => ({
  usuario: state.reducerSesion,
});
const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log(usuario.toJSON());
        dispatch(acionEstablecerSesion(usuario));
      } else {
        console.log('no existe sesion');
        dispatch(actionCerrarSesion(usuario));
      }
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
