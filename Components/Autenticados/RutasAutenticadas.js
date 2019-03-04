import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Profile from './Profile';
import Add from './Add';
import { StackFollow } from './StackFollow';
import { StackAdd } from './StackAdd';

const RutasAutenticadas = createBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: StackAdd,
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
