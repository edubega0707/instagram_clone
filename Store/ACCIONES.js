import CONSTANTES from './CONSTANTES';

export const actionRegistro = values => ({
  type: CONSTANTES.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: CONSTANTES.LOGIN,
  datos,
});

export const acionEstablecerSesion = usuario => ({
  type: CONSTANTES.ESTABLECERSESION,
  usuario,

});

export const actionCerrarSesion = () => ({
  type: CONSTANTES.CERRARSESION,
});


export const actionCargarImagen = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
  imagen,
});

export const actionLimpiarImagenSignUp = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP,
});
