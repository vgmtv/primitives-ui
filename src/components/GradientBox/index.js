import React from 'react'
import {View, StyleSheet, Platform} from 'react-primitives'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
} = design

let gradient = {}
if (Platform.OS === 'web') {
  gradient = {
    backgroundImage: 'linear-gradient(217deg, #2193b0, #6dd5ed)',
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  shadowBase: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
  },
  shadowLayerBase: {
    shadowOffset: {
      width: 0,
      height: 0.375 * unit,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  shadowLayerMid: {
    shadowOffset: {
      width: 0,
      height: 0.125 * unit,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,
  },
  shadowLayerTop: {
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: 0.75 * unit,
    },
    shadowOpacity: 0.14,
    shadowRadius: 10,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    ...gradient
  },
})

export const GradientBox = ({children, color, style, ...props}) => (
  <View style={[styles.container, style]} {...props}>
    <View style={[styles.shadowBase, styles.shadowLayerTop]}>
      <View style={[styles.shadowBase, styles.shadowLayerMid]}>
        <View style={[styles.shadowBase, styles.shadowLayerBase]}>
          <View style={styles.gradient}>{children}</View>
        </View>
      </View>
    </View>
  </View>
)

export default GradientBox
