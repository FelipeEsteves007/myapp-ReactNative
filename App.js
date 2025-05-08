import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Calculadora from "./src/screens/Calculadora";
import Drawer from "./src/screens/Drawer";  

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"screenOption={{headerTintColor: 'white',headerStyle: { backgroundColor: '#F15025' }}}>
                <Stack.Screen name="Login" component={Login}  Screenoptions={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
                <Stack.Screen name="Calculadora" component={Calculadora} options={{ headerTitle: 'Calculadora - IMC' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
