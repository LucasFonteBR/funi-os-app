import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { router } from 'expo-router';

const MenuButton = ({ title, redirectUrl }) => {
  return (
    <View style={ { margin: 10 } }>
      <TouchableOpacity style={ styles.button } onPress={ () => router.navigate(redirectUrl) }>
        <Text style={styles.text}>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
};

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default MenuButton;