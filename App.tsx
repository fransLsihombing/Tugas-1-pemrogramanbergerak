import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([
    { key: '1', name: 'CRF 153L' },
    { key: '2', name: 'Scoopy' },
    { key: '3', name: 'ADV 167' },
    { key: '4', name: 'GTR 150' },
    { key: '5', name: 'CB180R Streetwater' },
  ]);

  const handleButtonPress = () => {
    if (inputText.trim() !== '') {
      setItems([...items, { key: `${items.length + 1}`, name: inputText }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.title}>Aplikasi Sederhana Motor</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan teks"
            value={inputText}
            onChangeText={setInputText}
          />
          <Button title="Tambah Item" onPress={handleButtonPress} />
          <Image
            style={styles.image}
            source={{ uri: 'https://akcdn.detik.net.id/visual/2021/03/18/honda-cb650r-2022_169.jpeg?w=650' }}
            resizeMode="contain"
          />
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
            keyExtractor={item => item.key}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  viewContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    alignSelf: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
