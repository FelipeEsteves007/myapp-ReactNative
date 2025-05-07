import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Calculadora from "./src/screens/Calculadora";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator inictialRouteName="login">
            <Stack.Screen name = "login" component={Login}/>
            <Stack.Screen name = "calculadora" component={Calculadora}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;