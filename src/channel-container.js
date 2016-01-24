var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var channelContainer = React.createClass({
  render: function() {
    return(
    <View style={styles.container}>
      <Text>This view contains the channels</Text>
    </View>
  )}
})


var styles = StyleSheet.create({
  container: {
    height: windowSize.height,
    width: windowSize.width
  }
});


module.exports = channelContainer
