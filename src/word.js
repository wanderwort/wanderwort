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
      <View style={[styles.container, this.containerStyleFromData()]}>
        <Text style={[styles.wordText, this.textStyleFromData()]} numberOfLines={1}>
          {this.props.word.text}
        </Text>
      </View>
    )
  },
  containerStyleFromData: function() {
    var { backgroundColor } = this.props.word
    style = {}
    if(backgroundColor) {
      style['backgroundColor'] = backgroundColor
    }
    return style
  },
  textStyleFromData: function() {
    var { color, fontFamily } = this.props.word
    style = {}
    if(color) {
      style['color'] = color
    }
    if(fontFamily) {
      style['fontFamily'] = fontFamily
    }
    return style
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  wordText: {
    fontSize: 51,
    lineHeight: 61,
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
  }
});

module.exports = Word
