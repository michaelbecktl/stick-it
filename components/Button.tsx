import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  label?: string
  theme?: string
  onPress?: () => void
}

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#F2CC8F', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#0D0628"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  }

  if (theme === 'camera') {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            width: 64,
            height: 64,
            borderRadius: '50%',
            borderWidth: 4,
            borderColor: '#F2CC8F',
            marginBottom: 8,
          },
        ]}
      >
        <Pressable
          style={[
            styles.button,
            { backgroundColor: '#fff', borderRadius: '50%' },
          ]}
          onPress={onPress}
        >
          <FontAwesome name="camera" size={18} color="#0D0628" />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#3D405B',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})
