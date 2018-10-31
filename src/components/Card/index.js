import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@a7/vgm-constant'

const {
  size: {unit},
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 9 * unit,
    minHeight: 16 * unit,
  },
  shadowLayerBase: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.375 * unit,
    },
    shadowOpacity: 0.025 * unit,
    shadowRadius: 0.625 * unit,
  },
  shadowLayerMid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.125 * unit,
    },
    shadowOpacity: 0.015 * unit,
    shadowRadius: 2.25 * unit,
  },
  shadowLayerTop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.75 * unit,
    },
    shadowOpacity: 0.0175 * unit,
    shadowRadius: 1.25 * unit,
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 2 * unit,
    width: '100%',
  },  
})

export class Card extends Component {
  render() {
    const {children} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.shadowLayerBase} />
        <View style={styles.shadowLayerMid} />
        <View style={styles.shadowLayerTop} />
        <View style={styles.content}>{children}</View>
      </View>
    )
  }
}

export default Card
