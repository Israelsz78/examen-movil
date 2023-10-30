import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main";
import Index from "../screens/index";
import Kanto from "../screens/kanto";
import Johto from "../screens/johto";
import Hoenn from "../screens/hoenn";
import Sinnoh from "../screens/sinnoh";
import Unova from "../screens/Unova";
import Kalos from "../screens/kalos";
import Alola from "../screens/alola";
import Galar from "../screens/galar";
import Details from "../screens/details";

const Stack = createNativeStackNavigator()

export function MainNavigator (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bienvenido" component={Main}/>
            <Stack.Screen name="Inicio" component={Index}/>
            <Stack.Screen name="Kanto" component={Kanto}/>
            <Stack.Screen name="Johto" component={Johto}/>
            <Stack.Screen name="Hoenn" component={Hoenn}/>
            <Stack.Screen name="Sinnoh" component={Sinnoh}/>
            <Stack.Screen name="Unova" component={Unova}/>
            <Stack.Screen name="Kalos" component={Kalos}/>
            <Stack.Screen name="Alola" component={Alola}/>
            <Stack.Screen name="Galar" component={Galar}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}