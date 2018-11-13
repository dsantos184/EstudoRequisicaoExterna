import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';


export default class Filmes extends Component
{
  render()
  {
    return(
      <View style={styles.containerFilmes}>
        <Image source={{uri:this.props.data.poster.replace('http', 'https')}} style={styles.imgFilme} />
        <View style={styles.containerInfo}>
          <Text style={styles.tituloFilme}>{this.props.data.titulo}</Text>
          <Text>{this.props.data.genero}</Text>
        </View>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
    containerFilmes:
    {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },

    imgFilme:
    {
        width: 80,
        height: 110,
    },

    containerInfo:
    {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },

    tituloFilme:
    {
        fontSize: 18,
        fontWeight: 'bold',
    }
})