/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

import Filmes from './src/component/Filmes';


export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      filmes: [],
      loadin: true,
    };

    fetch('https://filmespy.herokuapp.com/api/v1/filmes')
      .then((r)=>r.json())
      .then((json)=>{
        let s = this.state;
        s.filmes = json.filmes;
        s.loadin = false;
        this.setState(s);
      });

  }

  render() {
    
    if( this.state.loadin )
    {
      return(
        <View style={styles.containerLoading}>
          <Text>Loading...</Text>
        </View>
      )
    }
    else
    {
      return (
        <View style={styles.container}>
          <FlatList 
            data={this.state.filmes}
            renderItem={({item})=><Filmes data={item}/>}
            keyExtractor={(item, index)=>index.toString()}
          />
        </View>
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  containerLoading:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
