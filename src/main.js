var React = require('react-native');

var {
  StyleSheet,
  Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./authentication/signin');
var Signup = require('./authentication/signup');
var Wordstream = require('./core/wordstream');
var Channels = require('./channel-container');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  wordstream: Wordstream,
  channels: Channels
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize("dLv9QyittaLdBY8uSakQsagqo3Jtd86QwcSzSrQj", "kaMoglnkSigv6JhNrmWHyFcZ6Q8Fgl7418mUieQC");
  },

  renderScene: function(route, navigator){
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator}/>;
    },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'channels'}}
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight }}
        />
      )
    }
});

  var styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
