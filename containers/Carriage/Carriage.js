import * as React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import styles from './styles'
import data from './data'
import { Button as CustomButton } from '../../components'

class ListItem extends React.PureComponent {
  render() {
    const { flightNumber, weight, airportFrom, airportTo, flightDate, onClick } = this.props
    return (
      <View style={styles.listItem}>
        <View style={styles.itemSection}>
          <Text>{flightNumber}</Text>
        </View>
        <View style={{ ...styles.itemSection, flexBasis: '15%' }}>
          <Text>{weight}</Text>
        </View>
        <View style={{ ...styles.itemSection, flexBasis: '25%' }}>
          <Text>{`${airportFrom}-${airportTo}`}</Text>
        </View>
        <View style={styles.itemSection}>
          <Text>{flightDate}</Text>
        </View>
        <View style={styles.itemSection}>
          <CustomButton
            title='>'
            styles={{ text: { fontSize: 30, color: '#efc218' } }}
            onPress={() => onClick(this.props)}
          />
        </View>
      </View>
    )
  }
}

class Carriage extends React.PureComponent {
  onSenderClick = (senderData) => {
    const { onChangePage, onSetPageProps } = this.props
    onSetPageProps(senderData)
    onChangePage('SenderRequest')
  }

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
        <View style={styles.mainInfo}>
          <View style={styles.infoRow}>
            <Text>Откуда: &nbsp;</Text>
            <Text style={{ fontWeight: '500' }}>{data.from}</Text>
            <Text style={{ marginLeft: '5%' }}>Куда: &nbsp;</Text>
            <Text style={{ fontWeight: '500' }}>{data.to}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>С: &nbsp;</Text>
            <Text style={{ fontWeight: '500' }}>{data.dateStart}</Text>
            <Text style={{ marginLeft: '5%' }}>По: &nbsp;</Text>
            <Text style={{ fontWeight: '500' }}>{data.dateEnd}</Text>
          </View>
          <View style={styles.infoRow}>
            <CustomButton
              title='ИЗМЕНИТЬ ФИЛЬТР'
              styles={{ text: { fontWeight: '500' } }}
              onPress={() => onChangePage('Main')}
            />
          </View>
        </View>
        <View style={styles.tableContainer}>
          <Text style={styles.tableHeader}>
            Найдено {data.senders.length} отправителей
          </Text>
          <FlatList
            data={data.senders}
            renderItem={({ item }) => <ListItem {...item} onClick={this.onSenderClick} />}
            keyExtractor={(item, index) => item.flightNumber}
          />
        </View>
        <View style={styles.carriageBtn.container}>
          <CustomButton
            title='Перевезти багаж'
            imageSrc={require('../../assets/img/arrow_down.png')}
            styles={styles.carriageBtn}
            onPress={() => onChangePage('CarriageRequest')}
          />
        </View>
      </View>
    )
  }
}

export default Carriage
