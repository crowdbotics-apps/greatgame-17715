import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile58576Navigator from '../features/UserProfile58576/navigator';
import Maps58557Navigator from '../features/Maps58557/navigator';
import Settings58535Navigator from '../features/Settings58535/navigator';
import Settings58520Navigator from '../features/Settings58520/navigator';
import NotificationList58519Navigator from '../features/NotificationList58519/navigator';
import Maps58518Navigator from '../features/Maps58518/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile58576: { screen: UserProfile58576Navigator },
Maps58557: { screen: Maps58557Navigator },
Settings58535: { screen: Settings58535Navigator },
Settings58520: { screen: Settings58520Navigator },
NotificationList58519: { screen: NotificationList58519Navigator },
Maps58518: { screen: Maps58518Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
