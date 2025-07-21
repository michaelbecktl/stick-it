import * as ExpoCamera from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useRef, useState } from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Button from '@/components/Button'
import CircleButton from '@/components/CircleButton'
import EmojiList from '@/components/EmojiList'
import EmojiPicker from '@/components/EmojiPicker'
import EmojiSticker from '@/components/EmojiSticker'
import IconButton from '@/components/IconButton'
import ImageViewer from '@/components/ImageViewer'
import { captureRef } from 'react-native-view-shot'

const PlaceholderImage = require('@/assets/images/starter.jpg')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  )
  // const [imageFilter, setImageFilter] = useState<string | undefined>(undefined)

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined)

  const imageRef = useRef<View>(null)
  const [mediaStatus, requestMediaPermission] = MediaLibrary.usePermissions()
  const [cameraStatus, requestCameraPermission] =
    ExpoCamera.useCameraPermissions()

  // This checks if user's device has permission enabled for us to access their camera and media library
  if (cameraStatus === null) {
    requestCameraPermission()
  }

  if (mediaStatus === null) {
    requestMediaPermission()
  }

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      aspect: [9, 16],
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('Camera aborted')
    }
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select any images.')
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      })

      await MediaLibrary.saveToLibraryAsync(localUri)
      if (localUri) {
        alert('Saved!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  // Filters //

  // const setGrayscale = () => {
  //   alert('Pressed!')
  //   setImageFilter('grayscale')
  // }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={160} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <>
          {/* <View style={styles.filterContainer}>
            <View style={styles.filterRow}>
              <FilterButton
                label="Grayscale"
                theme={styles.grayscale}
                onPress={setGrayscale}
              />
            </View>
          </View> */}

          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        </>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="camera" onPress={takePicture} />
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3D405B',
  },
  imageContainer: {
    marginTop: 16,
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },
  filterContainer: {
    position: 'absolute',
    bottom: 160,
  },
  filterRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  grayscale: {
    filter: 'saturate(0%)',
  },
})
