import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ texto, funcao }) => {
  return (
    <TouchableOpacity style={estilos.botao} onPress={funcao}>
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: '#F15025',
    padding: 13,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Botao;
