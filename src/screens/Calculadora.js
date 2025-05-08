import { View, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import Botao from '../components/Botao';
import { PaperProvider, MD3LightTheme as DefaultTheme, TextInput, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F15025',
    secondary: 'yellow',
  }
};

const Calculadora = (props) => {
  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [txtImc, setIMC] = useState('');

  const calcularIMC = () => {
    let peso = parseFloat(txtPeso.replace(',', '.'));
    let altura = parseFloat(txtAltura.replace(',', '.'));

    if (!peso || !altura) {
      setIMC('Preencha peso e altura corretamente');
      return;
    }

    let resultado = peso / (altura * altura);

    if (isNaN(resultado) || !isFinite(resultado)) {
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

  const voltar = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <View style={estilos.container}>
          <View style={estilos.imageContainer}>
            <Image
              style={estilos.image}
              source={require('../components/body.png')}
              resizeMode='contain'
            />
          </View>

          <TextInput
            mode="outlined"
            style={estilos.input}
            label="Peso"
            value={txtPeso}
            onChangeText={setPeso}
            placeholder="Digite seu peso"
            keyboardType="numeric"
          />

          <TextInput
            mode="outlined"
            style={estilos.input}
            label="Altura"
            value={txtAltura}
            onChangeText={setAltura}
            placeholder="Digite sua altura"
            keyboardType="numeric"
          />

          <View style={estilos.buttonGroup}>
            <Button mode="contained" onPress={calcularIMC} style={estilos.button}>
              Calcular
            </Button>
            <Button mode="contained" onPress={limpar} style={estilos.button}>
              Limpar
            </Button>
            <Button mode="contained" onPress={voltar} style={estilos.button}>
              Voltar
            </Button>
          </View>

          {txtImc !== '' && <Text style={estilos.resultado}>{txtImc}</Text>}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 3
  },
  image: {
    width: '100%',
    height: 200,
  },
  input: {
    marginBottom: 5,
    fontSize: 15,
  },
  buttonGroup: {
    marginTop: 7,
    gap: 8,
  },
  button: {
    paddingVertical: 4,
    borderRadius: 4,
  },
  resultado: {
    marginTop: 12,
    fontSize: 17,
    color: '#F15025',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Calculadora;
