import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const products = [
    {id: 1, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 250.000'},
    {id: 2, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 250.000'},
    {id: 3, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 250.000'},
    {id: 4, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 250.000'},
    {id: 5, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 250.000'},
    {id: 6, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 280.000'},
    {id: 7, name: 'Sepatu Sneakers Pria Hitam', price: 'Rp 280.000'},
  ];

  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/16/1abf9771-e4c9-47c8-b77a-95a05fc4bb34.jpg',
            }}
            style={styles.image}
          />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
