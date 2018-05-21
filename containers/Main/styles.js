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

export default {
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: '12%',
    paddingLeft: '5%',
    paddingBottom: '3%',
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
  burgerStyles: {
    view: {},
    text: {
      color: 'transparent',
      height: '0%',
    },
  },
  reloadStyles: {
    view: {},
    text: {
      color: 'transparent',
      height: '0%',
    },
  },
  leftButtonStyles: {
    view: {
      ...buttonViewStyles,
      backgroundColor: '#ddaf04',
    },
    text: {
      ...buttonTextStyles,
      color: 'black',
    },
  },
  rightButtonStyles: {
    view: {
      ...buttonViewStyles,
      backgroundColor: '#00ab7f',
    },
    text: {
      ...buttonTextStyles,
      color: 'white',
    },
  },
}
