import * as React from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity  } from 'react-native'

class Button extends React.PureComponent {
  render() {
    const { onPress, title, styles, imageSrc } = this.props

    return (
      <TouchableHighlight onPress={onPress} underlayColor='transparent'>
        <View style={styles.view}>
          {imageSrc && <Image source={imageSrc} />}
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Button