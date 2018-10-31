import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@a7/vgm-constant'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: unit,
    width: '100%',
    height: 4 * unit,
    borderRadius: 2 * unit,
    backgroundColor: colors.black.alt,
  },
})

export class SearchBar extends Component {
  static defaultProps = {
    textinput:
      'please input text here',
  }
  render() {
    const {textinput} = this.props
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'SF Pro Display',
            fontWeight: 200,
            fontSize: 14,
            letterSpacing: 0.1 * unit,
            color: colors.white.alt,
          }}
          numberOfLines={1}
        >
          {textinput}
        </Text>
      </View>
    )
  }
}

export default SearchBar
