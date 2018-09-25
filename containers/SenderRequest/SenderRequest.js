import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styles from './styles'
import { Button as CustomButton } from '../../components'

class SenderRequest extends React.PureComponent {

  render() {
    const { onChangePage, airportFrom, airportTo, flightDate, flightNumber, weight, description, sumToPay, sender  } = this.props

    return (
      <View style={styles.senderRequest}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={styles.burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Carriage')}
          />
          <Text style={styles.infoText}>{sender.name}</Text>
        </View>
        <View style={styles.mainInfoBar}>
          <Text style={styles.infoText}>{flightNumber} — {flightDate}, {airportFrom} → {airportTo}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>{sender.name}</Text>
          <View style={styles.userInfoText}>
            <Text>{flightNumber}</Text>
            <Text>{weight} кг</Text>
            <Text>{airportFrom} → {airportTo}</Text>
            <Text>{flightDate}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>Данные для связи</Text>
          <View style={styles.contacts}>
            <View style={styles.contact}>
              <Text style={styles.contactType}>Телефон:</Text>
              <Text style={styles.contactValue}>{sender.phone}</Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.contactType}>Почта:</Text>
              <Text style={styles.contactValue}>{sender.email}</Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.contactType}>Skype:</Text>
              <Text style={styles.contactValue}>{sender.skype}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>Данные о багаже</Text>
          <Text style={styles.descr}>{description}</Text>
          <Text style={styles.infoText}>Готов заплатить - {sumToPay} р.</Text>
        </View>
        <View style={styles.container}>
          <CustomButton
            title='Предложить свои услуги'
            styles={styles.offerBtn}
            onPress={() => onChangePage('Carriage')}
          />
          <CustomButton
            title='Назад'
            styles={styles.backBtn}
            onPress={() => onChangePage('Carriage')}
          />
        </View>
      </View>
    )
  }
}

export default SenderRequest
