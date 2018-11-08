import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackHome = createStackNavigator({
  Home: {
    screen: Home,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
    navigationOptions: {
      tabBarVisible: false,
    },
  },

});

export { StackHome };
