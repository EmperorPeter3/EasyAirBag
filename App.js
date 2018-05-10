import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    page: 0,
  }

  onPress = (page) => this.setState({ page })

  renderPage = () => {
    const { page } = this.state
    switch (page) {
      case 0:
        return (
          <View>
            <Text>This is main page</Text>
            <Button
              onPress={() => this.onPress(1)}
              title="Go to next page"
              color="green"
            />
          </View>
        )
      case 1:
        return (
          <View>
            <Text>This is second page</Text>
            <Button
              onPress={() => this.onPress(0)}
              title="Go to start page"
              color="blue"
            />
          </View>
        )
    }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
