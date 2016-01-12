var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Parse = require('parse/react-native');
var Words = Parse.Object.extend("Words");

var WordContainer = require('../word-container')

var words = []

module.exports = React.createClass({
  getInitialState: function() {
    return {
      scrollEnabled: true,
      words: words
    }
  },
  componentWillMount: function(){
    var query = new Parse.Query(Words);
    query.find({
      success: function(results){
        for (var i in results) {
          var color = results[i].get("color");
          var text = results[i].get("text");
          var backgroundColor = results[i].get("backgroundColor");
          var fontFamily = results[i].get("fontFamily");
          var newWord = {text,color,backgroundColor,fontFamily};
          words.push(newWord);
          this.setState({
            scrollEnabled: true,
            words: words
          });
        }
      }.bind(this),
      error: function(error){
        console.log("Query Error:"+console.error.message);
      }
    })
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
  },
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
