import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#F15025' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                <Image source={require('../components/body.png')} style={{ width: 100, height: 70, borderRadius: 25 }} />
                <Text style={{ color: 'white', fontSize: 30, marginLeft: 35 }}>IMC</Text>
            </View>
            <DrawerItemList {...props} labelStyle={{ color: 'white', fontSize: 18 }} />
            <DrawerItem
                label="Sair"
                onPress={() => props.navigation.navigate('Login')}
                labelStyle={{ color: 'white', fontSize: 20 }} 
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;
