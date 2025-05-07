import { View, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import Botao from '../components/Botao';
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  }
};

const Calculadora = () => {
  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [txtImc, setIMC] = useState('');

  const calcularIMC = () => {
    let peso = parseFloat(txtPeso);
    let altura = parseFloat(txtAltura);

    if (!peso || !altura) {
      setIMC('Preencha peso e altura corretamente');
      return;
    }

    let resultado = peso / (altura * altura);
    if (resultado) {
      setIMC('Valor inválido para IMC');
    } else {
      setIMC('O seu IMC é: ' + resultado.toFixed(2));
    }
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setIMC('');
  };

  return (
    <SafeAreaProvider> 
      <PaperProvider theme={theme}>
        <View style={estilos.View}>
          <View style={estilos.cImage}>
            <Image
              style={{ width: '80%', height: '90%' }}
              source={require('../components/body.png')}
            />
          </View>

          <TextInput 
            style={estilos.textInput}
            label="Peso"
            value={txtPeso}
            onChangeText={setPeso}
            placeholder='Digite seu peso'
          />

          <TextInput
            style={estilos.textInput}
            label="Altura"  
            value={txtAltura}
            onChangeText={setAltura}
            placeholder='Digite sua altura'
          />

          <View style={estilos.cBotoes}>
            <Botao texto="Calcular" funcao={calcularIMC} />
            <Botao texto="Limpar" funcao={limpar} />
            <Text style={estilos.resultado}>{txtImc ? txtImc : ''}</Text>
          </View>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const estilos = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  texto: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'AveriaLibre-Regular',
  },
  textInput: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#F15025',
    backgroundColor: '#FFFFFF',
    color: 'black',
    marginBottom: 5,
    padding: 5,
  },
  cImage: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cBotoes: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
  },
  resultado: {
    fontSize: 30,
    color: '#F15025',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default Calculadora;
