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
    var lowDash = <Text style={styles.lowdash}>_</Text>;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>wanderwort{lowDash}</Text>
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
        <Button text={'Sign up'} onPress={this.onSignupPress} />
        <Button text={'I have an account'} onPress={this.onSigninPress} />
      </View>
    )
  },
  onSignupPress: function(){
    this.props.navigator.immediatelyResetRouteStack([{ name: 'wordstream' }]);
  },
  onSigninPress: function(){
    this.props.navigator.pop();
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
    width: 250,
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
    fontSize: 51,
    fontFamily: 'PTSerif-Regular',
    marginBottom: 20
  },
  lowdash:{
    color: '#DA4120'
  }
});
