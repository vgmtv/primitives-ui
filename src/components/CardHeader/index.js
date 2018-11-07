import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: 2 * unit,
    backgroundColor: colors.secondary.base,
  },
})

export class CardHeader extends Component {
  static defaultProps = {
    title: 'line goes here',
  }
  render() {
    const {title} = this.props
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'SF Pro Display',
            fontSize: 1.75 * unit,
            fontWeight: 400,
            letterSpacing: 0.05 * unit,
            color: colors.black.alt,
            padding: 0.5 * unit,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    )
  }
}

export default CardHeader
