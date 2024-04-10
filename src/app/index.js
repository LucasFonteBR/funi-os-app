import { StyleSheet, Text, View } from 'react-native';
import MenuButton from './components/MenuButton';

export default function Home() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>Bem vindo á FuniOS</Text>
      <View>
        <View style={ styles.row }>
          <MenuButton title={ 'Ordem de Serviço' } redirectUrl={ '/serviceOrder' }/>
          <MenuButton title={ 'Produtos' } redirectUrl={ '/serviceOrder' }/>
        </View>
        <View style={ styles.row }>
          <MenuButton title={ 'Serviços' } redirectUrl={ '/serviceOrder' }/>
          <MenuButton title={ 'Clientes' } redirectUrl={ '/serviceOrder' }/>
        </View>
        <View style={ styles.row }>
          <MenuButton title={ 'Usuários' } redirectUrl={ '/user' }/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
  },
});


