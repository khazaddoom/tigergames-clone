import { useState } from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default function LoginContainer() {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
