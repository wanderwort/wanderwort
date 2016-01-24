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
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Main Channel</Text>
        </View>
        <View style={styles.ribbon}></View>
        <View style={styles.body}>
          <Text style={styles.text}>This is the main channel. The most beautiful words live here.</Text>
          <Text style={styles.text}>First word ever</Text>
          <Text style={styles.text}>Curator</Text>
          <Text style={styles.text}>Relevance?</Text>
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
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#620B0C',
  marginTop: 15
  },

  body: {
  margin: 5
  },

  border: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  },

  header: {
    backgroundColor:'#620B0C',
    alignItems: 'center'
  },

  text: {
      alignSelf: 'center',
      fontSize: 14,
      fontFamily: 'OpenSans-Light',
      color:'#620B0C'
  },

  headertext: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'PTSerif-Regular',
    color:'#FCFAF2'
  },

  ribbon: {
    marginTop: 8,
    padding: 5,
    backgroundColor: '000A1A'
  }

});


module.exports = Channel
