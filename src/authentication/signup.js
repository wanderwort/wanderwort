var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} = React;

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errorMessage: ''
    };
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>wanderwort_</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text})}
          />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ email: text})}
          />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text})}
          />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.passwordConfirm}
          onChangeText={(text) => this.setState({ passwordConfirm: text})}
          />
        <Button text={'Sign up'} onPress={this.onSigninPress} />
        <Button text={'Sign in'} onPress={this.onSigninPress} />
      </View>
    )
  },
  onSigninPress: function(){
    console.log('Bang!');
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
    backgroundColor: '#DA4120',
    color: '#FCFAF2',
    fontFamily: 'PTSerif-Regular'
  },
  label:{
    fontSize: 15,
    fontFamily: 'PTSerif-Regular'
  },
  logo:{
    fontSize: 35,
    fontFamily: 'PTSerif-Regular',
    marginBottom: 20
  },
});
