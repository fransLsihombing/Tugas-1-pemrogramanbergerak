import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const validatePalindrome = () => {
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    if (cleanedText === reversedText) {
      Alert.alert('Success', 'The text is a palindrome');
    } else {
      Alert.alert('probabilitas', 'tulisan ini bukan palindrome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Palindrome Validator</Text>
      <Image
        source={{
          uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/4/15/53d5ca54-de76-4005-91c0-9a3f3ffef2fb.jpg',
        }} // Ganti URL gambar sesuai kebutuhan
        style={styles.image}
      />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
        style={styles.input}
      />
      <Button title="Validate" onPress={validatePalindrome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
});

export default App;
