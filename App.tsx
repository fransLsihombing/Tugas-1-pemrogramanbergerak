import React, { useState } from 'react';
import { View, TextInput, Button, Text, ToastAndroid, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1590455428/go4c2dvipmmt0b93gdxi.png' }} // Ganti URL dengan URL gambar Anda
        style={styles.image}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={() => onLogin(username, password)} />
    </View>
  );
}

function HomeScreen() {
  return <Text>Beranda</Text>;
}

function SettingsScreen() {
  return <Text>Pengaturan Android</Text>;
}

const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === '' || password === '') {
      ToastAndroid.show('Username dan Password harus diisi!', ToastAndroid.SHORT);
      return; // Menghentikan fungsi jika username atau password kosong
    }
    // Proses login jika validasi terpenuhi
    setIsLoggedIn(true);
    ToastAndroid.show('Anda berhasil login!', ToastAndroid.SHORT);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default App;
