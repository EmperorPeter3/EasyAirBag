import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import * as pages from './containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
})


class App extends React.Component {
  state = {
    page: 'Main',
    pageProps: {},
  }

  onPress = (page) => this.setState({ page })

  onSetPageProps = (pageProps) => this.setState({ pageProps })

  renderPage = () => {
    const { page, pageProps } = this.state
  
    if (!pages[page]) return null // TO DO: 404 not found

    const Container = pages[page]

    return <Container onChangePage={this.onPress} onSetPageProps={this.onSetPageProps} {...pageProps} />
  }

  render() {
    const { page } = this.state
    console.log('page:', page)
    return (
      <View style={styles.container}>
        {this.renderPage()}
      </View>
    )
  }
}

export default App
