import { Image } from 'expo-image'
import { useState } from 'react'
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native'

type Props = {
  onSelect: (image: ImageSourcePropType) => void
  onCloseModal: () => void
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require('../assets/images/pink-heart.png'),
    require('../assets/images/poppy.png'),
    require('../assets/images/pikachu.png'),
    require('../assets/images/controller.png'),
    require('../assets/images/blush.png'),
    require('../assets/images/joy.png'),
    require('../assets/images/heart.png'),
    require('../assets/images/+1.png'),
    require('../assets/images/100.png'),
    require('../assets/images/fire.png'),
    require('../assets/images/yap.png'),
    require('../assets/images/nail_care.png'),
    require('../assets/images/musical_note.png'),
  ])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item)
            onCloseModal()
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
})
