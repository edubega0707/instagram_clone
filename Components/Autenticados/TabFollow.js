import { createMaterialTopTabNavigator } from 'react-navigation';
import Follow from './Follow';

const TabFollow = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },
  },
  {
    navigationOptions: {
      tabBarPosition: 'top',
    },
  },
);

export { TabFollow };
