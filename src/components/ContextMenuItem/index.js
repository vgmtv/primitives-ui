import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@vgm/design-specs'
import {
  PlaylistAddIcon,
  TickIcon,
  FacebookIcon,
  GooglePlusIcon,
} from '@vgm/icons'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    height: 5 * unit,
    padding: unit,
  },
  label: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginLeft: unit,
  },
  labelText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '100',
    fontSize: 1.5 * unit,
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0.5 * unit,
  },
})

export class ContextMenuItem extends Component {
  static defaultProps = {
    label: 'Add to Playlist',
  }
  render() {
    const {label} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <PlaylistAddIcon size={icon.xs} color={colors.white.base} />
        </View>
        <View style={styles.label}>
          <Text numberOfLines={1} style={styles.labelText}>
            {label}
          </Text>
        </View>
        <View style={styles.icon}>
          <FacebookIcon size={icon.xs} color={colors.white.base} />
        </View>
        <View style={styles.icon}>
          <GooglePlusIcon size={icon.xs} color={colors.white.base} />
        </View>
        <View style={styles.icon}>
          <TickIcon size={icon.xs} color={colors.green.base} />
        </View>
      </View>
    )
  }
}

export default ContextMenuItem
