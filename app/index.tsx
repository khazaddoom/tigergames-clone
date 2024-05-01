import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import LoginContainer from '../components/LoginContainer';

export default function Page() {
  return <TouchableWithoutFeedback onPress={Keyboard.dismiss}
    accessible={false}>
    <View style={styles.container}>
      <LoginContainer />
    </View>
  </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});