var React = require('react-native')
var _ = require('lodash')

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var Word = require('./word')
var UserContainer = require('./user-container')

var users = [{name: 'Tim'}, {name: 'Titus'}]

var WordContainer = React.createClass({
  render: function() {
    return (
      <ScrollView onMomentumScrollEnd={this.handleMomentumScrollEnd} horizontal={true} pagingEnabled={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Word word={this.props.data.word} />
        </View>
        {this.users()}
      </ScrollView>
    )
  },
  users: function() {
    return users.map((user, index) =>
      <View key={user.name} style={[styles.container]}>
        <UserContainer parentScrollView={this} user={user} />
      </View>
    )
  },
  handleMomentumScrollEnd: function(event) {
    scrollEnabled = true
    if(event.nativeEvent.contentOffset.x != 0) {
      scrollEnabled = false
    }
    this.props.parentScrollView.setState({scrollEnabled: scrollEnabled})
  }
})

var styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row'
  },
  container: {
    height: windowSize.height,
    width: windowSize.width
  },
  wordContainer: {
    justifyContent: 'center',
  }
});

module.exports = WordContainer
