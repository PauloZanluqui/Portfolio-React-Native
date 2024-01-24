import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Skills from '../screens/Skills/Skills';

const {Navigator, Screen} = createStackNavigator();

export default function RoutesNavigation(){
    return(
        <Navigator>
            <Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Screen name='Skills' component={Skills} options={{headerShown: false}}/>
        </Navigator>
    )
}