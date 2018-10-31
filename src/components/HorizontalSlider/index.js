import React from 'react'
import {View, StyleSheet, Platform} from 'react-primitives'

let overflow = {}
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  overflow = {overflow: 'hidden'}
} else {
  overflow = {overflowX: 'auto'}
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    ...overflow,
  },
})

export const HorizontalSlider = ({children, style, ...props}) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
)

export default HorizontalSlider
