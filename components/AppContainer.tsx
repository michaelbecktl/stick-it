import { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default function AppContainer({ children }: PropsWithChildren) {
  return <ScrollView style={styles.container}>{children}</ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
