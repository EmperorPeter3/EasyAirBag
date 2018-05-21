import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import styles from './styles'
import { Button as CustomButton } from '../../components'

class Carriage extends React.PureComponent {
  render() {
    const { onChangePage } = this.props
    return (
      <View style={styles.carriage}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={styles.burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Main')}
          />
          <Text style={styles.headerText}>Заявки на отправку груза</Text>
        </View>
      </View>
    )
  }
}

export default Carriage
