import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function AboutScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>About screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
  });ب