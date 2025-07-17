import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/About" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7FA',
    alignItems: 'center',
    justifyContent: 'center',
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
