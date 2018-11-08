import { createStackNavigator } from 'react-navigation';
import Search from './Search';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },

});

export { StackSearch };
