import * as React from 'react'
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native'
import styles from './styles'
import { Button as CustomButton } from '../../components'

class SenderRequest extends React.PureComponent {

  render() {
    const { onChangePage, airportFrom, airportTo, flightDate, flightNumber, weight, sender  } = this.props

    return (
      <View style={styles.senderRequest}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={styles.burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Carriage')}
          />
          <Text style={styles.headerText}>{sender.name}</Text>
        </View>
      </View>
    )
  }
}

export default SenderRequest
