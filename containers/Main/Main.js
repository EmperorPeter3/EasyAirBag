import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import styles from './styles'
import { Button as CustomButton } from '../../components'

class Main extends React.PureComponent {
  render() {
    const { onChangePage } = this.props
    return (
      <View style={styles.main}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={styles.burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Main')}
          />
        </View>
        <Image style={styles.background} source={require('../../assets/img/sb.png')} />
        <View style={styles.header}>
          <CustomButton
            title='reload'
            styles={styles.reloadStyles}
            imageSrc={require('../../assets/img/reload.png')}
            onPress={() => onChangePage('Main')}
          />
          <Text style={styles.headerText}>SHAREBAG</Text>
        </View>
        <View style={styles.buttonGroup}>
          <CustomButton
            title='Перевезти багаж'
            styles={styles.leftButtonStyles}
            imageSrc={require('../../assets/img/arrow_down.png')}
            onPress={() => onChangePage('Carriage')}
          />
          <CustomButton
            title='Отправить багаж'
            styles={styles.rightButtonStyles}
            imageSrc={require('../../assets/img/arrow_up.png')}
            onPress={() => onChangePage('Sending')}
          />
        </View>
      </View>
    )
  }
}

export default Main
