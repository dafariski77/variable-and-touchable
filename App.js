import React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';

export default class App extends React.Component {
  render() {
    let nama = 'Riski Dafa Setyawan';
    let umur = 2022 - 2003;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            textAlign: 'center',
            color: 'black',
          }}>
          {nama}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Cek Umur', `Umur Anda sekarang adalah ${umur} tahun`);
          }}
          style={{
            backgroundColor: 'deepskyblue',
            padding: 10,
            marginTop: 8,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Cek Umur
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
