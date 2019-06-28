import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import LoadingScreen from '../screens/LoadingScreen';
import DetailsScreen from '../screens/DetailsScreen';

const AppSwitchNavigator = createStackNavigator(
  {
    LoadingScreen,
    LoginScreen,
    DashboardScreen,
    DetailsScreen
  },
  { headerMode: 'none' }
);

export const AppNavigator = createAppContainer(AppSwitchNavigator);
