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
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
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
  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'deben ser maximo  caracteres';
  }

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Direccion de correo invalida';
  }
  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'Deben ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'debe ser de menor de 15 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password debe coincidir';
  }

  return errors;
};


const SignupForm = props => (
  <View style={styles.container}>
    <Field name="imagen" component={FieldImagen} />
    <Field name="nombre" component={FieldNombre} ph="Nombre" />
    <Field name="correo" component={FieldNombre} ph="correo@ejemplo.com" />
    <Field name="password" component={FieldNombre} ph="***********" />
    <Field name="confirmacion" component={FieldNombre} ph="***********" />

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
export default reduxForm({ form: 'SignupForm', validate })(SignupForm);
