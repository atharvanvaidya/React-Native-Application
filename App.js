import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render() {
    
    return (
      <View style={{flex:1 , padding: 50 , backgroundColor:'#101010' ,  alignContent: 'center' , justifyContent: 'center'}}>
        <TextInput
          style={{height: 40 ,textAlign:'center' , backgroundColor : '#202020' , color:'green' }}
          placeholder="Type here to Count the Number of Words!"
          placeholderTextColor="red"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42, textAlign:'center' , backgroundColor:'#505050'}}>
          {
            
            this.state.text.split(' ').length - 1
            //this.state.text.split(' ').map((word) => word && '🍕').join(' ')
          }
        </Text>
      </View>
    );
  }
}

