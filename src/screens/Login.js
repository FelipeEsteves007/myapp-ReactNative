import { ImageBackground, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goToCalculadora = () => {
        props.navigation.navigate("calculadora");
    }


    return (
        <View>
          <TextInput value={email} onChangeText={setEmail} label="Email" placeholder="Insira o e-mail"/>
          <TextInput value={password} onChangeText={setPassword} label="Password" placeholder="Insira sua senha"/>
            <Button style={{ backgroundColor: 'gray'}}onPress={goToCalculadora}>Entrar</Button>

        </View>
    );
}

export default Login;