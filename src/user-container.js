var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var User = require('./user')

var users = [{name: 'Tim'}, {name: 'Titus'}]

var userContainer = React.createClass({
  render: function() {
    return (
      <ScrollView onMomentumScrollEnd={this.handleMomentumScrollEnd} pagingEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <User user={this.props.user} />
        </View>
      </ScrollView>
    )
  },
  handleMomentumScrollEnd: function(event) {
    scrollEnabled = true
    if(event.nativeEvent.contentOffset.y != 0) {
      scrollEnabled = false
    }
    this.props.parentScrollView.setState({scrollEnabled: scrollEnabled})
  }
})

var styles = StyleSheet.create({
  container: {
    height: windowSize.height,
    width: windowSize.width
  }
});

module.exports = userContainer
