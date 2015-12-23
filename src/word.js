var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Word = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.wordText} numberOfLines={1}>
          {this.props.wordData.text}
        </Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  wordText: {
    fontSize: 51,
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
  }
});

module.exports = Word
