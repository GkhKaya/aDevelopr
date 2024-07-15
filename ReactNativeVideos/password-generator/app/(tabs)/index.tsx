import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let charset = '';
    if (includeUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset.length === 0) {
      Alert.alert('Hata', 'Lütfen en az 1 karakter tipini işaretleyin..');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre Oluşturucu</Text>

      <View style={styles.inputContainer}>
        <Text>Şifre uzunluğu:</Text>
        <TextInput
          style={styles.input}
          value={String(length)}
          onChangeText={(text) => setLength(parseInt(text) || 0)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Büyük Harf:</Text>
        <Switch
          value={includeUpperCase}
          onValueChange={(value) => setIncludeUpperCase(value)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Küçük Harf:</Text>
        <Switch
          value={includeLowerCase}
          onValueChange={(value) => setIncludeLowerCase(value)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Sayı:</Text>
        <Switch
          value={includeNumbers}
          onValueChange={(value) => setIncludeNumbers(value)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Sembol:</Text>
        <Switch
          value={includeSymbols}
          onValueChange={(value) => setIncludeSymbols(value)}
        />
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
        <Text style={styles.generateButtonText}>Oluştur</Text>
      </TouchableOpacity>

      <Text style={styles.password}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 50,
    textAlign: 'center',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  generateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  password: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;