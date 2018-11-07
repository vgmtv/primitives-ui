import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-primitives'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minWidth: 10 * unit,
    minHeight: 6 * unit,
    backgroundColor: colors.primary.alt,
  },
})

export class CardMedia extends Component {
  static defaultProps = {
    title: 'line goes here',
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    )
  }
}

export default CardMedia
