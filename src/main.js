var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var Word = require('./word')

var wordsData = [{text: 'Hallo Tim!'}, {text: 'Porree'}, {text: 'Kanapee'}]

var main = React.createClass({
  render: function() {
    return (
      <ScrollView pagingEnabled={true} style={styles.main} contentContainerStyle={styles.container}>
        {this.words()}
      </ScrollView>
    );
  },
  words: function() {
    return wordsData.map((wordData, index) =>
      <View key={index} style={styles.wordContainer}>
        <Word wordData={wordData} />
      </View>
    )
  },
  subviewStyle: function() {
    return {
      top: this.page * windowSize.height
    }
  }
});


var styles = StyleSheet.create({
  main: {
    backgroundColor: '#FCFAF2',
  },
  wordContainer: {
    justifyContent: 'center',
    height: windowSize.height,
    width: windowSize.width
  }
});

module.exports = main
