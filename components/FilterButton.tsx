import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  label: string
  theme: object
  onPress: () => void
}

export default function FilterButton({ label, theme, onPress }: Props) {
  return (
    <View style={[styles.filterContainer, theme]}>
      <Pressable onPress={onPress}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    width: 120,
    height: 120,
  },
})
