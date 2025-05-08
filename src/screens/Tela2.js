import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Tela2 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#F15025', fontSize: 24 }}>Clique aqui!</Text>
            <Button mode="contained" onPress={() => props.navigation.navigate("Calculadora")}>
                Abrir Calculadora IMC
            </Button>
        </View>
    );
};

export default Tela2;
