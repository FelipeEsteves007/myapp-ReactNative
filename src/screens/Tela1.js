import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Tela1 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#F15025', fontSize: 24 }}>Login</Text>
            <Button onPress={() => props.navigation.navigate("Login")}>
                Voltar para tela inicial
            </Button>
        </View>
    );
};

export default Tela1;


