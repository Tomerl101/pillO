import { createAppContainer, createStackNavigator } from 'react-navigation'
import DashboardScreen from '../screens/DashboardScreen'
import DetailsScreen from '../screens/DetailsScreen'
import Introduction from '../screens/introduction/introduction'
const AppSwitchNavigator = createStackNavigator(
  {
    Introduction,
    DashboardScreen,
    DetailsScreen
  },
  { headerMode: 'none' }
)

export const AppNavigator = createAppContainer(AppSwitchNavigator)
