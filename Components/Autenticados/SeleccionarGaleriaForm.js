import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';


const FieldNombre = props => (
  <View style={styles.textinput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType="default"
      autoCapitalize="none"
      onBlur={props.input.onBlur}
    />
    <View />
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}


  </View>
);

const FieldImagen = props => (
  <View>
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>

);

const validate = (values, props) => {
  const errors = {};

  if (!props.imagen) {
    errors.imagen = 'imagen requerida';
  }

  if (values.textp && !values.texto.length > 140) {
    errors.texto = 'debe ser menor a 140 caracteres';
  }
  return errors;
};


const SeleccionarGaleriaForm = props => (
  <View style={styles.container}>
    <Field name="imagen" component={FieldImagen} />
    <Field name="texto" component={FieldNombre} ph="Texto de la imagen" />
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  textinput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});
export default reduxForm({ form: 'SeleccionarGaleriaForm', validate })(SeleccionarGaleriaForm);
