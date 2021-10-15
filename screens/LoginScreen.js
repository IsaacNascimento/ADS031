import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text } from 'react-native';

export default function LoginScreen({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const pressionaEntrar = () => {
    //navigation.navigate('home');
  };

  const pressionaRegistrar = () => {
    navigation.navigate('registrar');
  };

  return (
    <View style={styles.conteudo}>
      <View style={{backgroundColor: 'gainsboro'}}>
        <Text style={styles.paragraph}>Entrar</Text>
      </View>
      <View style={{backgroundColor: 'gainsboro'}}>
        <View style={styles.meio}>
          <Text style={styles.paragra}>Cadastro</Text>
          <TextInput
          style={styles.campo} autoCapitalize={false} keyboardType="email-address"
           value={email} onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.paragra}>Senha</Text>
          <TextInput
          style={styles.campo} autoCapitalize={false} secureTextEntry={true}
          value={senha} onChangeText={(text) => setSenha(text)}
          />
        </View>
        <View style={styles.botao}>
          <Button title="Entrar" color="red" onPress={pressionaEntrar} />
        </View>
      </View>
      <View>
        <View style={styles.cadestre}>
          <Text style={{color: 'red'}} onPress={pressionaRegistrar}>Cadastre-se aqui!
          </Text>  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingLeft: 20,
    paddingEnd: 20,
    marginTop: 60  
  },
  campo: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'silver',
  },
  botao: {
    marginBottom: 16,
    paddingLeft: 45,
    paddingEnd: 45,
    padding: 20
  },
  paragraph: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'red',
    textAlign: 'center',
  },
  paragra: {
    marginTop: 3,
    marginBottom: 8,
    padding: 4,
    margin: 3,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  meio: {
    paddingLeft: 20,
    paddingEnd: 20,
  },
  cadestre: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 13,
    fontSize: 36,
    marginBottom: 8
  }
});
