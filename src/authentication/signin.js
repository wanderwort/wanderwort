var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} = React;



module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text})}
          />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text})}
          />
        
      </View>
    )
  },
  onSigninPress: function(){
    return console.log('Bang!');
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFAF2'
  },
  input:{
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 2,
    margin: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#DA4120'
  },
  label:{
    fontSize: 18,
    fontFamily: 'PTSerif-Regular'
  }
});
