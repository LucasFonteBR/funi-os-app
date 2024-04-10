import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { router } from 'expo-router';

const UserList = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={ styles.button } onPress={ () => router.navigate('/user/createUser') }>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default UserList;