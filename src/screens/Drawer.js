import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import CustomDrawer from '../components/CustomDrawer';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator 
            screenOptions={{ drawerActiveTintColor: 'white'}}
            drawerContent={props => <CustomDrawer {...props} />}
            
        >
            <DrawerNavigator.Screen name="Tela1" component={Tela1} options={{ drawerLabel: 'Login', title: 'Login' }}  />
            <DrawerNavigator.Screen name="Tela2" component={Tela2} options={{ drawerLabel: 'Calculadora',title: 'Calculadora IMC'  }}/>
        </DrawerNavigator.Navigator>
    );
};

export default Drawer;
