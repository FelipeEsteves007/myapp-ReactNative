import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import Botao from './src/components/Botao';

const App = () => {
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
    setIMC("O seu IMC é: " + resultado.toFixed(2));
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setIMC('');
  };

  return (
    <View style={estilos.View}>
      <View style={estilos.cImage}>
        <Image
          style={{ width: '80%', height: '90%' }}
          source={require('./src/components/body.png')}
        />
      </View>

      <View style={estilos.cInput}>
        <Text style={estilos.texto}>Peso:</Text>
        <TextInput
          style={estilos.textInput}
          value={txtPeso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />

        <Text style={estilos.texto}>Altura:</Text>
        <TextInput
          style={estilos.textInput}
          value={txtAltura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
      </View>

      <View style={estilos.cBotoes}>
        <Botao texto="Calcular" funcao={calcularIMC} />
        <Botao texto="Limpar" funcao={limpar} />
        <Text style={estilos.resultado}>{txtImc}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  texto: {
    fontSize: 36,
    color: 'black',
  },
  textInput: {
    fontSize: 36,
    borderWidth: 1,
    borderColor: '#F15025',
    backgroundColor: '#FFFFFF',
    color: 'black',
    marginBottom: 10,
    padding: 10,
  },
  cImage: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cInput: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    color: 'black',
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

export default App;
