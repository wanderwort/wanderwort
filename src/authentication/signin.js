var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Navigator
} = React;

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: '',
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
        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text})}
          />
        <Text style={styles.label}>{this.state.errorMessage}</Text>

        <Button text={'Sign in'} onPress={this.onSigninPress} />
        <Button text={'I need an account'} onPress={this.onSignupPress} />
      </View>
    )
  },


  onSigninPress: function(){
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'wordstream' }]); },
      error: (user, error) => { this.setState({errorMessage: "Please try again or setup account." });
                                console.log(this.state.username, this.state.password); }
    });
  },

  onSignupPress: function(){
    this.props.navigator.push({name: 'signup'});
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
    backgroundColor: '#620B0C',
    color: '#FCFAF2',
    fontFamily: 'OpenSans-Light'
  },
  label:{
    fontSize: 15,
    fontFamily: 'OpenSans-Light'
  },
  logo:{
    fontSize: 51,
    fontFamily: 'PTSerif-Regular',
    marginBottom: 20,
    color: '#000A1A'
  },
  lowdash:{
    color: '#620B0C'
  }
});
