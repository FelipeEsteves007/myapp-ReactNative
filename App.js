import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Calculadora from "./src/screens/Calculadora";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#F15025' }}}>
                <Stack.Screen name="login" component={Login} options={{headerTitle: 'Login'}}/>
                <Stack.Screen name="calculadora" component={Calculadora} options={{headerTitle: 'Calculadora - IMC'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
