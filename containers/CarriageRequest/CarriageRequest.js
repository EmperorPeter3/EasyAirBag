import * as React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import styles from './styles'
import { Button as CustomButton } from '../../components'

const text1 = 'Если вы хотите перевезти чей-то багаж, вам необходимо заполнить заявку. Укажите номер рейса, дату вылета, приложите фотографию билета (или pdf-файл). Также добавьте краткое описание багажа, который вы можете перевезти.'
const text2 = 'После того, как заявка будет создана, вам будут доступна информация по всем пассажирам, которые летят тем же рейсом, в то же время и которые выразили заинтересованность отправить свой груз'

class CarriageRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flightNumber: '',
      flightDate: '',
      ticketPhoto: null,
      weight: 0,
      description: '',
      bagPhoto: null,
      firstName: '',
      secondName: '',
      phone: '',
      email: '',
      skype: '',
      ...props.carriageData,
    }
  }

  onSubmit = (senderData) => {
    const { onChangePage, onSetPageProps } = this.props
    onSetPageProps(senderData)
    onChangePage('SenderRequest')
  }

  render() {
    const { onChangePage } = this.props

    return (
      <View style={styles.carriageRequest}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={styles.burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Carriage')}
          />
          <Text style={styles.headerText}>Заявка на отправку</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{text1}</Text>
          <Text style={styles.text}>{text2}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>Информация о рейсе</Text>
          <View style={styles.flexRow}>
            <View style={styles.flexColumn}>
              <Text style={styles.labelText}>Рейс #</Text>
              <TextInput
                style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(flightNumber) => this.setState({ flightNumber })}
                value={this.state.flightNumber}
              />
            </View>
            <View style={{ ...styles.flexColumn, marginLeft: 16 }}>
              <Text style={styles.labelText}>Дата вылета</Text>
              <TextInput
                style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(flightDate) => this.setState({ flightDate })}
                value={this.state.flightDate}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CarriageRequest