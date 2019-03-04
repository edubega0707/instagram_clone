import { takeEvery, call, select } from 'redux-saga/effects';
import axios from 'axios';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre,
  email,
});

const registroFotoCloudinary = ({ imagen }) => {
  console.log(imagen);
  const { uri, type } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const foto = {
    uri,
    type,
    name,
  };

  console.log(foto);

  const formImagen = new FormData();
  formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
  formImagen.append('file', foto);

  return fetch(CONSTANTES.CLOUDINARY_NAME, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'multipart/form-data;',
    // },
    // body: formImagen,
  }).then(response => response.json());
};

function* sagaRegistro(values) {
  try {
    const imagen = yield select(state => state.reducerImagenSignUp);
    console.log(imagen);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    console.log(urlFoto);
    console.log(urlFoto.secure_url);
    const fotoUrl = urlFoto.secure_url;
    
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, {
      uid,
      email,
      nombre,
      fotoUrl,
    });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFIrebase = ({ correo, password }) => autenticacion.signInWithEmailAndPassword(correo, password)
  .then(success => success.user.toJSON());

function* sagaLogin(values) {
  try {
    console.log(values);
    const resultado = yield call(loginEnFIrebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  // yield palabra reservada para pasar la ejecucion de una funcion
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  console.log('desde nuestra funcion generadora');
}
