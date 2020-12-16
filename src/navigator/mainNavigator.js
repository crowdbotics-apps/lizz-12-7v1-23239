import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1183085Navigator from '../features/BlankScreen1183085/navigator';
import BlankScreen0183084Navigator from '../features/BlankScreen0183084/navigator';
import LoginSignupScreen53185872Navigator from '../features/LoginSignupScreen53185872navigator'; /* added */

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1183085: { screen: BlankScreen1183085Navigator },
BlankScreen0183084: { screen: BlankScreen0183084Navigator },
  TermsScreen53185872: { screen: LoginSignupScreen53185872Navigator }, /* added */

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
