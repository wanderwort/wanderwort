var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var WordContainer = require('./word-container')

var words = [{text: 'schmausen', fontFamily: 'Avenir'}, {text: 'Porree', backgroundColor: 'red', color: '#F3F205'}, {text: 'Kanapee'}]



var main = React.createClass({
  getInitialState: function() {
    return {
      scrollEnabled: true
    }
  },
  render: function() {
    return (
      <ScrollView scrollEnabled={this.state.scrollEnabled} showsVerticalScrollIndicator={false} pagingEnabled={true} style={styles.main} contentContainerStyle={styles.container}>
        {this.wordContainers()}
      </ScrollView>
    );
  },
  wordContainers: function() {
    return words.map((word, index) =>
      <WordContainer key={index} data={ { word: word } }  parentScrollView={this} />
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
