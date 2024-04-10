import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>Bem vindo á FuniOS</Text>
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


