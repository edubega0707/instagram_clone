import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Profile from './Profile';
import Add from './Add';
import { StackFollow } from './StackFollow';

const RutasAutenticadas = createBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
},
{
  tabBarPosition: 'bottom',

});

export { RutasAutenticadas };
