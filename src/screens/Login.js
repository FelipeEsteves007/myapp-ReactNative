import { View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goToCalculadora = () => {  
        props.navigation.replace('Drawer'); 

    }
    
    return (
        <View>
            <TextInput value={email} onChangeText={setEmail} label="Email" placeholder="Insira o e-mail" />
            <TextInput value={password} onChangeText={setPassword} label="Password" placeholder="Insira sua senha" secureTextEntry />
            <Button style={{ backgroundColor: '#F15025' }} labelStyle={{ color: 'white' }} onPress={goToCalculadora} >Entrar</Button>
        </View>
    );
};

export default Login;
