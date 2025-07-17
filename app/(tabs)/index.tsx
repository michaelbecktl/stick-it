import Button from '@/components/Button'
import ImageViewer from '@/components/ImageViewer'
import { StyleSheet, View } from 'react-native'

const PlaceholderImage = require('@/assets/images/profile.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
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
  imageContainer: {
    marginTop: 16,
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
