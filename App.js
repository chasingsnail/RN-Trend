/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const uri = 'http://facebook.github.io/react/img/logo_og.png';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'popular'}
            title="home"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/home.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'popular' })}>
            <View style={styles.home}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'trend'}
            title="trend"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/trend.png')} />}
            onPress={() => this.setState({ selectedTab: 'trend' })}>
            <View style={styles.profile}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'favorite'}
            title="favorite"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'favorite' })}>
            <View style={styles.home}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="my"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/my.png')} />}
            onPress={() => this.setState({ selectedTab: 'my' })}>
            <View style={styles.profile}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  home: {
    flex: 1,
    backgroundColor: 'red'
  },
  profile: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  icon: {
    height: 22,
    width: 22
  }
});
