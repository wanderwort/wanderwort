var React = require('react-native');
var {
  TouchableHighlight,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function(){
    return (
      <TouchableHighlight
        style = {styles.button}
        underlayColor = {'#DA4120'}
        onPress = {this.props.onPress}>
        <Text style = {styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DA4120',
    marginTop: 15,
    padding: 5
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'PTSerif-Regular',
    color:'#DA4120'
  }
});
