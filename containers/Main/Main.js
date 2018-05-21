import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Button as CustomButton } from '../../components'

const styles = {
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
  },
  navbar: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '10%',
    zIndex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '100',
    letterSpacing: 12,
  },
  buttonGroup: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
}

const burgerStyles = {
  view: {
    display: 'flex',
    height: '100%',
    paddingTop: '10%',
    paddingLeft: '10%',
  },
  text: {
    color: 'transparent',
    height: '0%',
  },
  image: {
    width: '60%',
    height: '30%',
  },
}

const reloadStyles = {
  view: {
  },
  text: {
    color: 'transparent',
    height: '0%',
  },
}

const buttonViewStyles = {
  display: 'flex',
  height: '55%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
}

const buttonTextStyles = {
  marginTop: '5%',
  textAlign: 'center',
  width: '70%',
  fontSize: 20,
  fontWeight: '500',
}


const leftButtonStyles = {
  view: {
    ...buttonViewStyles,
    backgroundColor: '#ddaf04',
  },
  text: {
    ...buttonTextStyles,
    color: 'black',
  },
}

const rightButtonStyles = {
  view: {
    ...buttonViewStyles,
    backgroundColor: '#00ab7f',
  },
  text: {
    ...buttonTextStyles,
    color: 'white',
  },
}

class Main extends React.Component {


  render() {
    const { onChangePage } = this.props
    return (
      <View style={styles.main}>
        <View style={styles.navbar}>
          <CustomButton
            title='burger'
            styles={burgerStyles}
            imageSrc={require('../../assets/img/burger.png')}
            onPress={() => onChangePage('Main')}
          />
        </View>
        <Image style={styles.background} source={require('../../assets/img/sb.png')} />
        <View style={styles.header}>
          <CustomButton
            title='reload'
            styles={reloadStyles}
            imageSrc={require('../../assets/img/reload.png')}
            onPress={() => onChangePage('Main')}
          />
          <Text style={styles.headerText}>SHAREBAG</Text>
        </View>
        <View style={styles.buttonGroup}>
          <CustomButton
            title='Перевезти багаж'
            styles={leftButtonStyles}
            imageSrc={require('../../assets/img/arrow_down.png')}
            onPress={() => onChangePage('Carriage')}
          />
          <CustomButton
            title='Отправить багаж'
            styles={rightButtonStyles}
            imageSrc={require('../../assets/img/arrow_up.png')}
            onPress={() => onChangePage('Sending')}
          />
        </View>
      </View>
    )
  }
}

export default Main
