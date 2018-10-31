import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@a7/vgm-constant'

const {
  size: {unit},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 5 * unit,
    backgroundColor: colors.green.base,
  },
})

export class Menu extends Component {
  render() {
    return <View style={styles.container} />
  }
}

export default Menu
