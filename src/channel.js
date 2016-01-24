var React = require('react-native');
var Button = require('./common/button');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Channel = React.createClass({
  render: function() {
    return(
    <View style={styles.container}>
      <View style={[styles.box, styles.border]}>
        <View style={styles.header}>
          <Text>Main Channel</Text>
        </View>
        <View>
          <Text>Description</Text>
          <Text>First word ever</Text>
          <Text>Curator</Text>
          <Text>Relevance?</Text>
          <Button text={'Subscribe'}/>
        </View>
      </View>
    </View>
  )}
})


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 50
  },
  box: {
  },
  border: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  },
  header: {
    backgroundColor:'red',
    alignItems: 'center'
  }
});


module.exports = Channel
