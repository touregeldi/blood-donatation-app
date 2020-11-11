import React from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet,Image } from 'react-native';
import * as Font from 'expo-font';
import {Block,Text} from './components/index'

import * as theme from './theme'

export default class App extends React.Component {
  state= {
    fontsLoaded:false,
  }
  loadFonts(){
    Font.loadAsync({
      "Montserrat-Bold": require('./assets/fonts/Montserrat-Bold.ttf'),
      // "Montserrat-Regural": require('./assets/fonts/Montserrat-Regural.ttf'),
      "Montserrat-SemiBold": require('./assets/fonts/Montserrat-SemiBold.ttf'),
      "Montserrat-Medium": require('./assets/fonts/Montserrat-Medium.ttf'),
      "Montserrat-Light": require('./assets/fonts/Montserrat-Light.ttf')
    })
  }

  async componentDidMount(){
    await this.loadFonts();

    this.setState({fontsLoaded: true})
  }

  renderHeader(){
    return(
      <Block flex={0.333} column style={{paddingHorizontal:15}}>

        <Block flex={false} row center style={{paddingVertical:15}}>
          <Block center>
            <Text h3 bold color="white">Blood Request</Text>
          </Block>
          {/* <Image style={styles.avatar} source={'./assets/avatar.png'}/> */}
        </Block>

        <Block color={'white'} card shadow color="white" style={styles.headerChart}>
          <Block flex={2} row space ='between'style={{paddingHorizontal:30}}>
              <Block flex = {false} row center>
                  <Text h1>291</Text>
                  <Text caption bold color="tertiary">-12%</Text>
              </Block>
              <Block flex = {false} row center>
                  <Text caption bold color="accent">+49%</Text>
                  <Text h1>481</Text>
              </Block>
          </Block>
          <Block center row space='between' style={{paddingHorizontal:30, }}>
                <Text caption light>Available</Text>
                <Text caption light>Requests</Text>
              </Block>
          <Block>
            <Text>chart</Text>
          </Block>
          
        </Block>

      </Block>
    )
  }

  renderRequests(){
    return(
      <Block flex={0.8} column color='gray2' style={styles.requests}>
        <Block row space="between">
          <Text light>Recent Updates</Text>
          <Text>View All</Text>
        </Block>
      </Block>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.accent,
  },
  headerChart:{
    paddingTop:30,
    paddingBottom:45,
    zIndex: 1
  },
  requests:{
    marginTop: -40,
    paddingTop:55+20,
    paddingHorizontal:15,
    zIndex:-1
  }
});
