import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {CloseIcon} from '@a7/icons'
import {design} from '@a7/vgm-constant'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 2 * unit,
    borderTopRightRadius: 2 * unit,
    backgroundColor: colors.black.base,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 4.5 * unit,
    padding: 1.5 * unit,
    borderTopLeftRadius: 2 * unit,
    borderTopRightRadius: 2 * unit,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.base,
  },
  label: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    display: 'flex',
  },
  textHeader: {
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    fontSize: 2 * unit,
    color: colors.white.base,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 5 * unit,
    width: '100%',
    marginTop: unit,
  },
})

export class ContextMenu extends Component {
  static defaultProps = {
    title: 'Context Menu',
  }
  render() {
    const {title, children} = this.props
    return (
      <View {...this.props} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.label}>
            <Text numberOfLines={1} style={styles.textHeader}>
              {title}
            </Text>
          </View>
          <View style={styles.icon}>
            <CloseIcon size={icon.xs} color={colors.white.base} />
          </View>
        </View>
        <View style={styles.bodyContainer}>{children}</View>
      </View>
    )
  }
}
export default ContextMenu
