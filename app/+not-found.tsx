import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oh no! This page does not exist!' }} />
      <View style={styles.container}>
        <Text style={styles.text}>An error has occured, please go back to</Text>
        <Link href="/" style={styles.button}>
          Home Screen
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0D0628',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#DA627D',
  },
})
