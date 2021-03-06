import * as React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
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
      weight: '',
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

  onSubmitRequest = () => {
    const { onChangePage, onSetPageProps } = this.props
    onSetPageProps(this.state)
    onChangePage('CarriageOffers')
  }

  render() {
    const { onChangePage } = this.props

    return (
      <ScrollView style={styles.carriageRequest}>
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
          <View style={styles.flexColumn}>
            <Text style={styles.labelText}>Фотография билета</Text>
            {/* <WebView source={'./fileuploader.html'} /> */}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>Информация о багаже, который вы готовы перевезти</Text>
          <View style={styles.flexColumn}>
            <Text style={styles.labelText}>Вес багажа, кг</Text>
            <TextInput
              style={{ height: 40, width: 70, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(weight) => this.setState({ weight })}
              value={this.state.weight}
            />
          </View>
          <View style={styles.flexColumn}>
            <Text style={styles.labelText}>Опишите какой багаж вы готовы взять</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{ borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(description) => this.setState({ description })}
              value={this.state.description}
            />
            {/* на макете тут можно загрузить фотографию багажа --- но это не логично, какого? который собираешься перевезти? */}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.infoText}>Персональная информация</Text>
          <View style={styles.flexRow}>
            <View style={styles.flexColumn}>
              <Text style={styles.labelText}>Имя</Text>
              <TextInput
                style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(firstName) => this.setState({ firstName })}
                value={this.state.firstName}
              />
            </View>
            <View style={{ ...styles.flexColumn, marginLeft: 16 }}>
              <Text style={styles.labelText}>Фамилия</Text>
              <TextInput
                style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(secondName) => this.setState({ secondName })}
                value={this.state.secondName}
              />
            </View>
          </View>
          <View style={{ ...styles.flexColumn, marginTop: 16 }}>
            <Text style={styles.labelText}>Телефон</Text>
            <TextInput
              style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(phone) => this.setState({ phone })}
              value={this.state.phone}
            />
          </View>
          <View style={{ ...styles.flexColumn, marginTop: 16 }}>
            <Text style={styles.labelText}>E-mail</Text>
            <TextInput
              style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={{ ...styles.flexColumn, marginTop: 16 }}>
            <Text style={styles.labelText}>Skype</Text>
            <TextInput
              style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(skype) => this.setState({ skype })}
              value={this.state.skype}
            />
          </View>
        </View>
        <View style={styles.container}>
          <CustomButton
            title='Разместить заявку'
            styles={styles.offerBtn}
            onPress={this.onSubmitRequest}
          />
          <CustomButton
            title='Посмотреть список предложений'
            styles={styles.backBtn}
            onPress={() => onChangePage('Carriage')}
          />
        </View>
      </ScrollView>
    )
  }
}

export default CarriageRequest