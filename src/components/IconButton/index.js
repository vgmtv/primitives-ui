import React, {Component} from 'react'
import {Touchable, View, StyleSheet} from 'react-primitives'

const styles = StyleSheet.create({
  container: {},
})

export class IconButton extends Component {
  static defaultProps = {
    onPress: () => {
      console.warn('onPress for this component not yet implemented!')
    },
  }

  render() {
    const {children, onPress} = this.props
    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>{children}</View>
      </Touchable>
    )
  }
}

export default IconButton
