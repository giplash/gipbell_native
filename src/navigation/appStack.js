import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CodeGeneratorScreen from '../screens/CodeGeneratorScreen';
import CodeScannerScreen from '../screens/CodeScannerScreen';
import ForeignProfileScreen from '../screens/ForeignProfileScreen';
import headerStyle from "../style/header";

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        CodeGenerator: {
            screen: CodeGeneratorScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Generate your QR code',
            }),
        },
        CodeScanner: {
            screen: CodeScannerScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Scan QR code',
            }),
        },
        ForeignProfile: {
            screen: ForeignProfileScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Profile',
            }),
        }
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            ...headerStyle
        }
    }
);
